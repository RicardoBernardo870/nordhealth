export enum LoginFields {
  EMAIL = 'email',
  PASSWORD = 'password',
  UPDATES = 'updates'
}

export type LoginFormType = {
  [LoginFields.EMAIL]: string
  [LoginFields.PASSWORD]: string
  [LoginFields.UPDATES]?: boolean
}
