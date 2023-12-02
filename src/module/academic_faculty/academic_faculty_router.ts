import express from 'express'
import { validateRequest } from '../middelware/studentValidateReqMiddelware'
import { academicFacultyValidation } from './academic_faculty_validation'
import { academicFacultyController } from './academic_faculty_controller'

const router = express.Router()

router.post(
  '/academic-faculty',
  validateRequest(academicFacultyValidation.academic_faculty_validation),
  academicFacultyController.createController,
)
router.get('/academic-faculty', academicFacultyController.getAllFaculty)
router.get('/academic-faculty/:id', academicFacultyController.getSingleFaculty)
// router.delete('/academic-faculty/:id', academicFacultyController.deleteFaculty)
router.patch('/academic-faculty/:id',validateRequest(academicFacultyValidation.academic_Update_faculty_validation), academicFacultyController.editFaculty)

export default router
