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
  birth_date: Dayjs
  gender: string
  qna: PasswordQna
  nick_name: string
}
