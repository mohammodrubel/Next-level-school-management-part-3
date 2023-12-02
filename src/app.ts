import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import globalErrorHandeler from './module/middelware/global_error_handeler'
import notFound from './module/middelware/not_found'
import router from './module/router'

// parser
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

app.use('/api/v1', router)
app.use(globalErrorHandeler)
// not found
app.use(notFound)

export default app
