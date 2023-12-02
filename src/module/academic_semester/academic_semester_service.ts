import httpStatus from 'http-status'
import { AppError } from '../middelware/appError'
import { AcademicSemister, academicSemisterCodeMapper, academic_semisterCode_mapper } from './academic_semester_interface'
import { AcademicSemesterModel } from './academic_semester_model'

const createAccademicSemesterIntoDb = async (payload: AcademicSemister) => {
    if(academicSemisterCodeMapper[payload.name]!== payload.code){
        throw new AppError(httpStatus.NOT_FOUND,'invalid semester code!')
    }
    const result = await AcademicSemesterModel.create(payload)
  return result
}


const getAllAcademicSemesterService = async()=>{
  const result = await AcademicSemesterModel.find({})
  return result 
}
const getSingleAcademicSemesterService = async(id:string)=>{
  const result = await AcademicSemesterModel.findOne({_id:id})
  return result 
}

const getUpdateAcademicSemesterService = async(payload:AcademicSemister, id:string)=>{
    if(academicSemisterCodeMapper[payload.name]!==payload.code){
      throw new AppError(httpStatus.NOT_FOUND,'invalid semester code!')
    }
    const reuslt = await AcademicSemesterModel.findOneAndUpdate(payload)
}

export const academicSemesterService = {
  createAccademicSemesterIntoDb,
  getAllAcademicSemesterService,
  getSingleAcademicSemesterService,
  getUpdateAcademicSemesterService
}
