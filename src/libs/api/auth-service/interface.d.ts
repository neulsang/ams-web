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
}
