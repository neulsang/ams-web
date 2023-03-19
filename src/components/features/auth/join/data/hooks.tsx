import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'
import dayjs from 'dayjs'
import { GENDER_RADIO_DATAS, QNA_QUESTION_DATAS } from './constants'
import { IJoinForm } from './interface'
import { useAuthServiceApi } from '@libs/api/auth-service'
import { useNavigate } from 'react-router-dom'
import ROTUE_PATHS from '@libs/constants/routerPaths'

const useJoinForms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinForm>({
    defaultValues: {
      password: '',
      passwordCheck: '',
      name: '',
      email: '',
      phoneNumber: '',
      birthDate: dayjs(new Date()).format('YYYY-MM-DD'),
      gender: GENDER_RADIO_DATAS[0].value,
      qna: {
        question: QNA_QUESTION_DATAS[0].value,
        answer: '',
      },
      nickName: '',
    },
    resolver: yupResolver(schema),
  })

  const { register } = useAuthServiceApi()
  const navigate = useNavigate()

  const onSubmit = async (formData: IJoinForm) => {
    const joinFormData = {
      ...formData,
      birthDate: dayjs(formData.birthDate).format('YYYY-MM-DD'),
    }

    try {
      await register(joinFormData)
      navigate(ROTUE_PATHS.ROOT)
    } catch (e) {
      console.log('error', e)
    }
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  }
}

export default useJoinForms
