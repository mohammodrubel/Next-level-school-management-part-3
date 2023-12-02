import httpStatus from 'http-status'
import config from '../../config'
import { AcademicSemister } from '../academic_semester/academic_semester_interface'
import { AcademicSemesterModel } from '../academic_semester/academic_semester_model'
import { AppError } from '../middelware/appError'
import { Tstudent } from '../student/student_interface'
import StudentModel from '../student/student_model' // student schema
import { NewUser, Tuser } from './user_interface'
import { User } from './user_model' // user schema
import { generateStudentId } from './user_utill_'
import mongoose from 'mongoose'

const createStudentToDb = async (password: string, payload: Tstudent) => {
  const userData: Partial<Tuser> = {}
  userData.password = password || (config.defaultPassword as string)
  userData.role = 'student'
  const addmitionSemister = await AcademicSemesterModel.findById(
    payload.admisstionSemester,
  )
  if (!addmitionSemister) {
    throw new AppError(httpStatus.NOT_FOUND, 'Admisstion sesmister not found')
  }
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    userData.id = await generateStudentId(addmitionSemister)
        // transaction one 
        const newUser = await User.create([userData],{session})
        if (!newUser.length) {
            throw new AppError(httpStatus.BAD_REQUEST,'faild to create user')
        }
        payload.id = newUser[0].id
        payload.user = newUser[0]._id
        // transaction two
        const newStudent = await StudentModel.create([payload],{session})
        if(!newStudent.length){
            throw new AppError(httpStatus.BAD_REQUEST,'faild to create student')
        }
        await session.commitTransaction()
        await session.endSession()
        return newStudent
        
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
  }
}

export const userService = {
  createStudentToDb,
}
