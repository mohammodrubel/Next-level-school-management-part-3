import { studentService } from './student_service'
import sendResponce from '../middelware/utils/server_responce'
import httpStatus from 'http-status'
import { catchAsync } from '../middelware/catchAsync'

const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudents()
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'students show successfully',
    data: result,
  })
})

const getSingleStudent = catchAsync(async (req, res) => {
  const id = req.params.id
  console.log(id)
  const result = await studentService.getSingleStudentService(id)
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student show successfully',
    data: result,
  })
})

const deleteStudent = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await studentService.DeleteStudentService(id)
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student Delete successfull',
    data: result,
  })
})
const updateStudent = catchAsync(async (req, res) => {
  
  const id = req.params.id
  const result = await studentService.updateStudentService(id,req.body)
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student Delete successfull',
    data: result,
  })
})

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent
}
