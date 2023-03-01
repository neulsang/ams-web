import { axiosClient } from '@libs/api/base'
import { AuthServiceApi, LoginRequestData } from './interface'

let authServiceApi: AuthServiceApi

const { instance } = axiosClient

const URLS = {
  LOGIN: '/v1/auth/login',
  LOGOUT: '/v1/auth/logout',
}

const useAuthServiceApi = () => {
  if (authServiceApi) {
    return authServiceApi
  }

  const login = async (loginData: LoginRequestData) => {
    return instance
      .post(URLS.LOGIN, loginData, {
        // withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200 && !res.data.code) {
          const accessToken = res.data.access_token
          window.sessionStorage.setItem('access_token', accessToken)
          window.sessionStorage.setItem('refresh_token', res.data.refresh_token)
          axiosClient.instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
        }
        return res.data
      })
  }

  authServiceApi = {
    login,
  }

  return authServiceApi
}

export default useAuthServiceApi
