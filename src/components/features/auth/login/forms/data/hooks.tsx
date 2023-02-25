import react from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'
import { iLoginForm } from './interface'

const useLoginForms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    defaultValues: {
      id: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: iLoginForm) => console.log(data)

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  }
}

export default useLoginForms
