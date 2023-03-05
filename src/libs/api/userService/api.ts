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

  const getMyInfo = async () => {
    return instance.get(URLS.ME).then((res) => {
      return res.data
    })
  }

  userServiceApi = {
    getMyInfo,
  }

  return userServiceApi
}

export default useUserServiceApi
