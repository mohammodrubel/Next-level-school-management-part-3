import httpStatus from 'http-status'
import { catchAsync } from '../middelware/catchAsync'
import sendResponce from '../middelware/utils/server_responce'
import { academicDepartemntService } from './academic_department_service'

const createControllerDepartemnt = catchAsync(async (req, res) => {
  const result = academicDepartemntService.createAccademicDepartmentIntoDb(
    req.body,
  )
  sendResponce(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Created successfully',
    data: await result,
  })
})
const getAllDepartment = catchAsync(async (req, res) => {
  const result = academicDepartemntService.getAllAcademicDepartmentService()
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty show successfully',
    data: await result,
  })
})
const getSingleDepartment = catchAsync(async (req, res) => {
  const id = req.params.id
  const result =
    academicDepartemntService.getSingleAcademicDepartmentService(id)
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Created successfully',
    data: await result,
  })
})
const editDepartment = catchAsync(async (req, res) => {
  const id = req.params.id
  const payload = req.body
  const result =
    await academicDepartemntService.getUpdateAcademicDepartmentService(
      payload,
      id,
    )
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update successfully',
    data: await result,
  })
})
// const deleteDepartment = catchAsync(async (req, res) => {
//     const id = req.params.id
//   const result = academicFacultyService.deleteUpdateAcademicDepartmentService(id)
//   sendResponce(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Delete successfully',
//     data: await result,
//   })
// })

export const academicDepartmentController = {
  createControllerDepartemnt,
  getAllDepartment,
  getSingleDepartment,
  editDepartment,
  // deleteDepartment
}
