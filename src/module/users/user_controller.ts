import { userService } from './user_service'
import sendResponce from '../middelware/utils/server_responce'
import httpStatus from 'http-status'
import { catchAsync } from '../middelware/catchAsync'

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student } = req.body
  const result = await userService.createStudentToDb(password, student)
  sendResponce(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Created successfully',
    data: result,
  })
})

export const userController = {
  createStudent,
}
