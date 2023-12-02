import { Schema, Types, model } from 'mongoose'
import { AcademicDepartmentType } from './academic_department_interface'
import { AppError } from '../middelware/appError'
import httpStatus from 'http-status'

const academicDepartmentSchema = new Schema<AcademicDepartmentType>({
  name: {
    type: String,
    unique:true
  },
  accademicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'Academic-Faculty',
  },
},{
  timestamps:true
})


academicDepartmentSchema.pre("save",async function(next){
    try{
      const existName = await AcademicDepartmentScehma.findOne({name:this.name})
        if(existName){
          throw new AppError(httpStatus.NOT_FOUND,'Department name already exist')
        }
    }
    catch(error:any){
      next(error)
    }
})
academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  try {
    const query = this.getQuery();
    const isDepartmentExist = await AcademicDepartmentScehma.findOne(query);

    if (!isDepartmentExist) {
      throw new AppError(404,'ID is not valid');
    }

    next();
  } catch (error:any) {
    next(error);
  }
});


export const AcademicDepartmentScehma = model<AcademicDepartmentType>(
  'AcademicDepartment',
  academicDepartmentSchema,
)
