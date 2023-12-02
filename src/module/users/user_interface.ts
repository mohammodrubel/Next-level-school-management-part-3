export type Tuser = {
  id: string
  password: string
  needPasswordChange: boolean
  role: 'admin' | 'faculty' | 'student'
  isDeleted: boolean
  status: 'active' | 'blocked'
}

export type NewUser = {
  password: string
  role: string
  id: string
}
