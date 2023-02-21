import { object, string, number, date, InferType } from 'yup'

const schema = object().shape({
  id: string().required('아이디는 필수 입력입니다.').min(5, '아이디는 최소 5자리 이상입니다.'),
  password: string().required('비밀번호는 필수 입니다.'),
  name: string().required('이름은 필수 입력입니다.'),
  birthDate: date().required('생년월일은 필수 입력입니다.'),
  gender: string().required('이름은 필수 입력입니다.'),
})

export default schema
