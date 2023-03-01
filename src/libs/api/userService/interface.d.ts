export type IQna = {
  question: string
  answer: string
}

export type IUser = {
  id: string
  email: string
  name: string
  nick_name: string
  birthDate: string
  gender: 'male' | 'female'
  qna: IQna
}

export interface UserServiceApi {
  login: () => Promise<IUser>
}
