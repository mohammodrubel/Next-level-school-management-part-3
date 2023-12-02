import { Response } from 'express'

type Tresponce<T> = {
  statusCode: number
  success: Boolean
  message?: string
  data: T
}

const sendResponce = <T>(res: Response, data: Tresponce<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  })
}

export default sendResponce
