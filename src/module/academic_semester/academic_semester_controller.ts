import httpStatus from 'http-status'
import { catchAsync } from '../middelware/catchAsync'
import sendResponce from '../middelware/utils/server_responce'
import { academicSemesterService } from './academic_semester_service'

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = academicSemesterService.createAccademicSemesterIntoDb(req.body)
  sendResponce(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Created successfully',
    data: await result,
  })
})

const getAllSemester = catchAsync(async (req, res) => {
  const result = academicSemesterService.getAllAcademicSemesterService()
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'students show successfully',
    data: await result,
  })
})
const getSingleSemester = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = academicSemesterService.getSingleAcademicSemesterService(id)
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student show successfully',
    data: await result,
  })
})

const updateSemester = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = academicSemesterService.getUpdateAcademicSemesterService(req.body,id)
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'update Semester successfully',
    data: await result,
  })
})

export const academicSemisterController = {
  createAcademicSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester
}
