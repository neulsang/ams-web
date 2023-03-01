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
    return instance.post(URLS.LOGIN, loginData).then((res) => res.data)
  }

  authServiceApi = {
    login,
  }

  return authServiceApi
}

export default useAuthServiceApi
