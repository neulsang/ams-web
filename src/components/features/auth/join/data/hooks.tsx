import react from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'
import dayjs from 'dayjs'
import { axiosClient } from '@libs/api/base'
import { GENDER_RADIO_DATAS, QNA_QUESTION_DATAS } from './constants'

const useJoinForms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      password: '',
      passwordCheck: '',
      name: '',
      email: '',
      birthDate: dayjs(new Date()).format('YYYY-MM-DD'),
      gender: GENDER_RADIO_DATAS[0].value,
      qnaQuestion: QNA_QUESTION_DATAS[0].value,
      qnaAnswer: '',
    },
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data: any) => {
    const memberJoinData = {
      birthDate: {
        day: data.birthDate.getDate(),
        month: data.birthDate.getMonth() + 1,
        year: data.birthDate.getFullYear(),
      },
      email: data.email,
      gender: data.gender,
      id: data.id,
      name: data.name,
      password: data.password,
      qna: {
        answer: data.qnaQuestion,
        question: data.qnaAnswer,
      },
    }
    console.log('memberJoinData', memberJoinData)

    const res = await axiosClient.instance.post('/v1/users', memberJoinData)
    console.log(res)

    /*  const memberJoinData = {
      birthDate: {
        day: 29,
        month: 7,
        year: 1990,
      },
      email: 'dgkwon90@naver.com',
      gender: 'male',
      id: 'dgkwon90',
      name: '권대근',
      password: 'test1234',
      qna: {
        answer: 'blue',
        question: 'What is my favorite color?',
      },
    } */
    console.log(data)
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  }
}

export default useJoinForms
