import { z } from 'zod'

const academic_faculty_validation = z.object({
  body: z.object({
    name: z.string(),
  }),
})
const academic_Update_faculty_validation = z.object({
  body: z.object({
    name: z.string(),
  }),
})

export const academicFacultyValidation = {
  academic_faculty_validation,
  academic_Update_faculty_validation
}
