import { object, string, date, ref } from 'yup'

const schema = object().shape({
  password: string().required('비밀번호는 필수 입니다.'),
  passwordCheck: string()
    .required('비밀번호 확인은 필수 입니다.')
    .oneOf([ref('password')], '비밀번호와 비밀번호 확인이 다릅니다.'),
  name: string().required('이름은 필수 입력입니다.'),
  email: string().email().required('이메일은 필수 입력입니다.'),
  birth_date: date().required('생년월일은 필수 입력입니다.'),
  gender: string().required('이름은 필수 입력입니다.'),
  qna: object().shape({
    answer: string().required('비밀번호 찾기 답변은 필수 입니다.'),
    question: string(),
  }),
})

export default schema
