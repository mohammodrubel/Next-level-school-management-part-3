import express from 'express'
import { validateRequest } from '../middelware/studentValidateReqMiddelware'
import { academicDepartmentValidation } from './academic_department_validation'
import { academicDepartmentController } from './academic_department_controller'

const router = express.Router()

router.post(
  '/academic-department',
  validateRequest(academicDepartmentValidation.academicDepertemntValid),
  academicDepartmentController.createControllerDepartemnt,
)
router.get(
  '/academic-department',
  academicDepartmentController.getAllDepartment,
)
router.get(
  '/academic-department/:id',
  academicDepartmentController.getSingleDepartment,
)
router.patch(
  '/academic-department/:id',
  validateRequest(academicDepartmentValidation.academicDepertemntValidUpdate),
  academicDepartmentController.editDepartment,
)
// router.delete('/academic-department',academicDepartmentController.deleteDepartment)

export default router
