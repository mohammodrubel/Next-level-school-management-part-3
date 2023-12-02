import httpStatus from 'http-status'
import { catchAsync } from '../middelware/catchAsync'
import sendResponce from '../middelware/utils/server_responce'
import { academicFacultyService } from './academic_faculty_service'

const createController = catchAsync(async (req, res) => {
  const result = academicFacultyService.createAccademicFacultyIntoDb(req.body)
  sendResponce(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Created successfully',
    data: await result,
  })
})
const getAllFaculty = catchAsync(async (req, res) => {
  const result = academicFacultyService.getAllAcademicFacultyService()
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty show successfully',
    data: await result,
  })
})
const getSingleFaculty = catchAsync(async (req, res) => {
    const id = req.params.id
  const result = academicFacultyService.getSingleAcademicFacultyService(id)
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Created successfully',
    data: await result,
  })
})
const editFaculty = catchAsync(async (req, res) => {
    const id = req.params.id
    const payload = req.body 
  const result = academicFacultyService.getUpdateAcademicFacultyService(payload,id)
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update successfully',
    data: await result,
  })
})
// const deleteFaculty = catchAsync(async (req, res) => {
//     const id = req.params.id
//   const result = academicFacultyService.deleteUpdateAcademicFacultyService(id)
//   sendResponce(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Delete successfully',
//     data: await result,
//   })
// })



export const academicFacultyController = {
    createController,
    getAllFaculty,
    getSingleFaculty,
    editFaculty,
    // deleteFaculty,
}
