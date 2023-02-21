import { object, string, number, date, InferType } from 'yup'

const schema = object().shape({
  id: string()
    .required('아이디를 입력 후 로그인 버튼을 눌러주세요.')
    .min(5, '아이디는 최소 5자리 이상입니다.'),
  password: string().required('비밀번호를 입력 후 로그인 버튼을 눌러주세요.'),
})

export default schema
