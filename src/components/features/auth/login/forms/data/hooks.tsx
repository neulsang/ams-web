import react from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'
import { LoginRequestData, useAuthServiceApi } from '@libs/api/auth-service'

const useLoginForms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  const { login } = useAuthServiceApi()

  const onSubmit = (loginData: LoginRequestData) => {
    const resData = login(loginData)
    console.log(resData)
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  }
}

export default useLoginForms
