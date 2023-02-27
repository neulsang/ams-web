import { object, string, date, ref } from 'yup'

const schema = object().shape({
  id: string().required('아이디는 필수 입력입니다.').min(5, '아이디는 최소 5자리 이상입니다.'),
  password: string().required('비밀번호는 필수 입니다.'),
  passwordCheck: string()
    .required('비밀번호 확인은 필수 입니다.')
    .oneOf([ref('password')], '비밀번호와 비밀번호 확인이 다릅니다.'),
  name: string().required('이름은 필수 입력입니다.'),
  email: string().email().required('이메일은 필수 입력입니다.'),
  birthDate: date().required('생년월일은 필수 입력입니다.'),
  gender: string().required('이름은 필수 입력입니다.'),
  qnaAnswer: string().required('비밀번호 찾기 답변은 필수 입니다.'),
  qnaQuestion: string(),
})

export default schema
