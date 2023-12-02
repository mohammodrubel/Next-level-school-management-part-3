import express from 'express'
import { validateRequest } from '../middelware/studentValidateReqMiddelware'
import { academicValidation } from './academic_semester_validation'
import { academicSemisterController } from './academic_semester_controller'

const router = express.Router()

router.post(
  '/create-academic-semister',
  validateRequest(academicValidation.AcademicSemesterSchemaValidation),
  academicSemisterController.createAcademicSemester,
)

router.patch(
  '/create-academic-semister/:id',
  validateRequest(academicValidation.AcademicSemesterSchemaUpdateValidation),
  academicSemisterController.updateSemester,
)
router.get(
  '/create-academic-semister',
  academicSemisterController.getAllSemester,
)
router.get(
  '/create-academic-semister/:id',
  academicSemisterController.getSingleSemester,
)

export default router
