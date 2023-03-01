import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios'
import { ApiAxiosRequestConfig, TokenRefreshResponse } from '@libs/api/base/interface'
import { BASE_URLS } from './constants'

class AxiosClient {
  public readonly instance: AxiosInstance

  private isRefreshing: boolean

  private failedQueue: any[]

  public constructor() {
    this.isRefreshing = false
    this.failedQueue = []
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_SERVER_URL,
      // withCredentials: true,
    })

    this.initializeReqInterceptor()
    this.initializeResInterceptor()
  }

  private initializeReqInterceptor = () => {
    this.instance.interceptors.request.use(this.setReqInterceptors)
  }

  private initializeResInterceptor = () => {
    this.instance.interceptors.response.use(this.handleResponseSuccess, this.handleResponseError)
  }

  private setReqInterceptors = (config: InternalAxiosRequestConfig<any>) => {
    if (!config.url) throw new Error('AxiosRequestConfig url undefined')
    console.log('%c✔ %s => %s', 'color:green;font-weight:bold', config.url, config.baseURL)

    const accessToken = sessionStorage.getItem('access_token')
    if (accessToken && this.instance.defaults.headers.common.Authorization === undefined) {
      this.attachTokenToRequest(config, accessToken)
    }

    config.headers!.MenuId = 1

    return config
  }

  private handleResponseSuccess = (response: any) => {
    // TODO: Read the header, if have custom header => Specific your response handling
    return response
  }

  private handleResponseError = (error: AxiosError<any, any>) => {
    // TODO: Read the header, if have custom header => Specific your error handling

    // Check if Toast-Message is true

    if (!this.shouldIntercept(error)) {
      return Promise.reject(error)
    }

    const originalRequest = error.config as ApiAxiosRequestConfig

    if (originalRequest.retry || originalRequest.queued) {
      return Promise.reject(error)
    }

    if (this.isRefreshing) {
      return new Promise<string | null>((resolve, reject) => {
        this.failedQueue.push({ resolve, reject })
      })
        .then((accessToken) => {
          originalRequest.queued = true
          this.attachTokenToRequest(originalRequest, accessToken)
          return this.instance.request(originalRequest)
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    }

    originalRequest.retry = true
    this.isRefreshing = true

    return new Promise((resolve, reject) => {
      this.instance!.post<TokenRefreshResponse>(BASE_URLS.TOKEN_REFRESH)
        .then((res) => {
          const { accessToken } = res.data
          this.setTokenData(accessToken)
          this.attachTokenToRequest(originalRequest, accessToken)
          this.processQueue(null, accessToken)
          resolve(this.instance.request(originalRequest))
        })
        .catch((err) => {
          this.processQueue(err, null)
          reject(err)
        })
        .finally(() => {
          this.isRefreshing = false
        })
    })
  }

  private processQueue = (error: AxiosError | null, token: string | null = null) => {
    this.failedQueue.forEach((promise) => {
      if (error) {
        promise.reject(error)
      } else {
        promise.resolve(token)
      }
    })
    this.failedQueue = []
  }

  private shouldIntercept = (error: AxiosError<any>) => {
    try {
      return error.response?.status === 401 && error.response?.data?.code === 'T001'
    } catch (e) {
      return false
    }
  }

  private attachTokenToRequest(request: AxiosRequestConfig, accessToken: string | null) {
    request.headers!.Authorization = `Bearer ${accessToken}`
  }

  private setTokenData(accessToken: string = '') {
    window.sessionStorage.setItem('access_token', accessToken)
    this.instance!.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  }
}

const axiosClient = new AxiosClient()

export default axiosClient
