import {z} from 'zod'

const academicDepertemntValid = z.object({
  body:z.object({
    name:z.string({invalid_type_error:'academic department must be string',required_error:'Departmentname is Required'}),
    accademicFaculty:z.string({invalid_type_error:'academic department must be string'})
  })
}) 
const academicDepertemntValidUpdate = z.object({
  body:z.object({
    name:z.string({invalid_type_error:'academic department must be string',required_error:'Departmentname is Required'}).optional(),
    accademicFaculty:z.string({invalid_type_error:'academic department must be string'}).optional()
  })
}) 




export const academicDepartmentValidation = {
  academicDepertemntValid,
  academicDepertemntValidUpdate
}