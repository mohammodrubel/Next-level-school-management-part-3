import express from 'express'
import { studentController } from './student_controller'
import { validateRequest } from '../middelware/studentValidateReqMiddelware'
import { studentValidation } from './student_validation'
const router = express.Router()

// router.post('/create-student',studentController.createStudent)
router.get('/create-student', studentController.getAllStudents)
router.get('/create-student/:id', studentController.getSingleStudent)
router.patch(
  '/create-student/:id',
  validateRequest(studentValidation.studentUpdateValidationSchema),
  studentController.updateStudent,
)
router.delete('/create-student/:id', studentController.deleteStudent)

export default router
