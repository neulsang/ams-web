import react from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'

const useJoinForms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      password: '',
      name: '',
      birthDate: null,
      gender: '', //TODO: 남여?
      qna: '', //질문과 답변이라 값이 하나 더 있어야함.
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

export default useJoinForms
