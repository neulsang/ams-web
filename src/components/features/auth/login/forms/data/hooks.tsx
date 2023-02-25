import react from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'

const useLoginForms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  }
}

export default useLoginForms
