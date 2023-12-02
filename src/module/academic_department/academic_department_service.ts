import { AcademicFacaulty } from "../academic_faculty/academic_faculty_model"
import { AcademicDepartmentType } from "./academic_department_interface"
import { AcademicDepartmentScehma } from "./academic_department_model"

const createAccademicDepartmentIntoDb = async (payload: AcademicDepartmentType) => {
    const result = await AcademicDepartmentScehma.create(payload)
  return result
}

const getAllAcademicDepartmentService = async()=>{
  const result = await AcademicDepartmentScehma.find({}).populate('accademicFaculty')
  return result 
}
const getSingleAcademicDepartmentService = async(id:string)=>{
  const result = await AcademicDepartmentScehma.findOne({_id:id}).populate('accademicFaculty')
  return result 
}

const getUpdateAcademicDepartmentService = async (payload: AcademicDepartmentType, id: string) => {
  const result = await AcademicDepartmentScehma.findOneAndUpdate({ _id: id }, payload, { new: true });
  return result;
};
// const deleteUpdateAcademicDepartmentService = async(id:string)=>{
//     const reuslt = await AcademicDepartmentScehma.deleteOne({_id:id})
//     return reuslt 
// }

export const academicDepartemntService = {
  createAccademicDepartmentIntoDb,
  getAllAcademicDepartmentService,
  getSingleAcademicDepartmentService,
  getUpdateAcademicDepartmentService,
  // deleteUpdateAcademicDepartmentService
}
