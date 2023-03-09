import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'
import dayjs from 'dayjs'
import { IJoinForm } from './interface'
import { useAuthServiceApi } from '@libs/api/auth-service'
import { QNA_QUESTION_DATAS } from '@components/features/auth/join/data'

const useFindEmailForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinForm>({
    defaultValues: {
      name: '',
      birth_date: dayjs(new Date()).format('YYYY-MM-DD'),
      qna: {
        question: QNA_QUESTION_DATAS[0].value,
        answer: '',
      },
    },
    resolver: yupResolver(schema),
  })

  const { register } = useAuthServiceApi()

  const onSubmit = async (formData: IJoinForm) => {
    console.log(formData)
    const joinFormData = {
      ...formData,
      birth_date: dayjs(formData.birth_date).format('YYYY-MM-DD'),
    }

    const joinResponse = await register(joinFormData)
    console.log(joinResponse)
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  }
}

export default useFindEmailForm
