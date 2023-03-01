import { axiosClient } from '@libs/api/base'
import { UserServiceApi } from './interface'

let userServiceApi: UserServiceApi

const { instance } = axiosClient

const URLS = {
  ME: 'v1/users/me',
}

const useUserServiceApi = () => {
  if (userServiceApi) {
    return userServiceApi
  }

  const login = async () => {
    return instance.get(URLS.ME).then((res) => {
      return res.data
    })
  }

  userServiceApi = {
    login,
  }

  return userServiceApi
}

export default useUserServiceApi
