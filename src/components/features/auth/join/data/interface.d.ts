export type PasswordQna = {
  answer: string
  question: string
}

export type IJoinForm = {
  id?: string
  password: string
  passwordCheck?: string
  name: string
  email: string
  birthDate: Dayjs
  gender: string
  qna: PasswordQna
  nickName: string
  phoneNumber: string
}
