import { Schema, model } from 'mongoose'
import {
  Tstudent,
  UserName,
  Guardian,
  LocalGuardian,
} from './student_interface'
import bcrypt from 'bcrypt'
import { NextFunction } from 'express'
import { AppError } from '../middelware/appError'
import httpStatus from 'http-status'
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    
  },
  middelName: {
    type: String,
    
  },
  lastName: {
    type: String,
   
  },
})

const guardianSchema = new Schema<Guardian>({
  fathersName: {
    type: String,
   
  },
  fathersOccupation: {
    type: String,
   
  },
  fathersContactNumber: {
    type: String,
    
  },
  mothersName: {
    type: String,
    
  },
  mothersOccupation: {
    type: String,
    
  },
  mothersContactNumber: {
    type: String,
    
  },
})
const localeGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
   
  },
  occupation: {
    type: String,
    
  },
  contactNo: {
    type: String,
    
  },
  address: {
    type: String,
  
  },
})
const studentSchema = new Schema<Tstudent>({
  id: {
    type: String,
    unique: true,
    
  },
  user: {
    type: Schema.Types.ObjectId,
    unique: true,
    ref: 'User',
  },
  admisstionSemester:{
    type:Schema.Types.ObjectId,
    ref:'AcademicSemister'
  },
  academicDepartment:{
    type:Schema.Types.ObjectId,
    ref:'AcademicDepartment'
  },
  password: {
    type: String,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female', 'others'],
    
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
  },
  parmanentAddress: {
    type: String,
  },
  guardian: guardianSchema,
  localGuardian: localeGuardianSchema,
  profileImage: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
  },

})

studentSchema.pre('save',async function (next){
  try{
    const existingUserId = await StudentModel.findOne({id:this.id})
    if(existingUserId){
      throw new AppError(httpStatus.NOT_FOUND,'this id is not valid')
    }
    next()
  }catch(error:any){
    next(error)
  }
})

const StudentModel = model<Tstudent>('Student', studentSchema)
export default StudentModel
