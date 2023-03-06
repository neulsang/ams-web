import { IJoinForm } from '@components/features/auth/join/data'

export type LoginRequestData = {
  email: string
  password: string
}

export type LoginResponseData = {
  access_token: string
  refresh_token: string
}

export interface AuthServiceApi {
  login: (loginData: LoginRequestData) => Promise<LoginResponseData>
  logout: () => Promise<any>
  register: (joinFormData: IJoinForm) => Promise<IJoinForm>
}
