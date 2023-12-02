import express from 'express'
import { userController } from './user_controller'
import { validateRequest } from '../middelware/studentValidateReqMiddelware'
import { studentValidation } from '../student/student_validation'
const router = express.Router()


router.post(
  '/create-student',
  validateRequest(studentValidation.studentValidationSchema),
  userController.createStudent,
)

export default router
