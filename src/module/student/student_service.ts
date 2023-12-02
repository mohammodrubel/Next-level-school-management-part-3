import mongoose from 'mongoose'
import StudentModel from './student_model'
import { AppError } from '../middelware/appError'
import httpStatus from 'http-status'
import { User } from '../users/user_model'
import { Tstudent } from './student_interface'

const getAllStudents = async () => {
  const result = StudentModel.find({ isDeleted: { $ne: true } })
    .populate('user')
    .populate('admisstionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'accademicFaculty',
      },
    })
  return result
}

const getSingleStudentService = async (id: string) => {
  const result = await StudentModel.findOne({ id: id })
    .populate('admisstionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'accademicFaculty',
      },
    })
  return result
}
const updateStudentService = async (id: string, payload: Partial<Tstudent>) => {
  const { name, guardian, localGuardian, ...remainingData } = payload;
  const modifyUpdateData: Record<string, unknown> = { ...remainingData };

  if (name && name.Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifyUpdateData[`name.${key}`] = value;
    }
  }
  if (guardian && guardian.Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifyUpdateData[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && localGuardian.Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifyUpdateData[`localGuardian.${key}`] = value;
    }
  }
console.log(modifyUpdateData)
  
  const result = await StudentModel.findOneAndUpdate(
    { id: id },
    modifyUpdateData,
    {new:true,runValidators:true}
    )
  return result
}

const DeleteStudentService = async (id: string) => {
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const deletedStudent = await StudentModel.findOneAndUpdate(
      { id: id },
      { isDeleted: true },
      { new: true, session },
    )
    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'faild to featch Student')
    }

    const deletedUser = await User.findOneAndUpdate(
      { id: id },
      { isDeleted: true },
      { new: true, session },
    )
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'faild to featch User')
    }

    await session.commitTransaction()
    await session.endSession()
    return deletedStudent
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
  }
}

export const studentService = {
  getAllStudents,
  getSingleStudentService,
  DeleteStudentService,
  updateStudentService
}
