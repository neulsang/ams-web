import react from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'
import { LoginRequestData, useAuthServiceApi } from '@libs/api/auth-service'
import { useNavigate } from 'react-router-dom'
import ROTUE_PATHS from '@libs/constants/routerPaths'
import { useUserServiceApi } from '@libs/api/userService'

const useLoginForms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()
  const { login } = useAuthServiceApi()
  const { getMyInfo } = useUserServiceApi()

  const onSubmit = async (loginData: LoginRequestData) => {
    const resData = await login(loginData)

    if (resData.access_token) {
      const userInfo = await getMyInfo()
      window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))

      navigate(ROTUE_PATHS.ACCOUNT_LIST_PAGE)
    }
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  }
}

export default useLoginForms
