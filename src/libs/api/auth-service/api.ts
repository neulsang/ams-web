import { IJoinForm } from '@components/features/auth/join/data'
import { axiosClient } from '@libs/api/base'
import { AuthServiceApi, LoginRequestData } from './interface'

let authServiceApi: AuthServiceApi

const { instance } = axiosClient

const URLS = {
  LOGIN: '/v1/auth/login',
  LOGOUT: '/v1/auth/logout',
  REGISTER: 'v1/auth/register',
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

  const logout = async () => {
    return instance.get(URLS.LOGOUT).then((res) => {
      window.sessionStorage.removeItem('access_token')
      window.sessionStorage.removeItem('refresh_token')
      window.sessionStorage.removeItem('userInfo')
      return res.data
    })
  }

  const register = async (joinFormData: IJoinForm) => {
    return instance.post(URLS.REGISTER, joinFormData).then((res) => res.data)
  }

  authServiceApi = {
    login,
    logout,
    register,
  }

  return authServiceApi
}

export default useAuthServiceApi
