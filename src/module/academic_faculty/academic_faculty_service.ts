import { Academic_faculty_interface } from "./academic_faculty_interface"
import { AcademicFacaulty } from "./academic_faculty_model"

const createAccademicFacultyIntoDb = async (payload: Academic_faculty_interface) => {
    const result = await AcademicFacaulty.create(payload)
  return result
}

const getAllAcademicFacultyService = async()=>{
  const result = await AcademicFacaulty.find({})
  return result 
}
const getSingleAcademicFacultyService = async(id:string)=>{
  const result = await AcademicFacaulty.findOne({_id:id})
  return result 
}

const getUpdateAcademicFacultyService = async(payload:Academic_faculty_interface, id:string)=>{
    const reuslt = await AcademicFacaulty.findOneAndUpdate({_id:id},payload)
    return reuslt
}
const deleteUpdateAcademicFacultyService = async(id:string)=>{
    const reuslt = await AcademicFacaulty.deleteOne({_id:id})
    return reuslt 
}

export const academicFacultyService = {
  createAccademicFacultyIntoDb,
  getAllAcademicFacultyService,
  getSingleAcademicFacultyService,
  getUpdateAcademicFacultyService,
  deleteUpdateAcademicFacultyService
}
