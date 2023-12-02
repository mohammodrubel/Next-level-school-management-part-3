import { z } from 'zod'

const userNameSchema = z.object({
  firstName: z.string(),
  middelName: z.string(),
  lastName: z.string(),
})

const guardianSchema = z.object({
  fathersName: z.string(),
  fathersOccupation: z.string(),
  fathersContactNumber: z.string(),
  mothersName: z.string(),
  mothersOccupation: z.string(),
  mothersContactNumber: z.string(),
})

const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
})

const studentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      password: z.string(),
      name: userNameSchema,
      gender: z.enum(['male', 'female', 'others']),
      dateOfBirth: z.string(),
      email: z.string().email(),
      contactNumber: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      parmanentAddress: z.string(),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      profileImage: z.string(),
      admisstionSemester:z.string(),
      academicDepartment:z.string()
    }),
  }),
})


const userNameUpdateSchema = z.object({
  firstName: z.string().optional(),
  middelName: z.string().optional(),
  lastName: z.string().optional(),
})

const guardianUpdateSchema = z.object({
  fathersName: z.string().optional(),
  fathersOccupation: z.string().optional(),
  fathersContactNumber: z.string().optional(),
  mothersName: z.string().optional(),
  mothersOccupation: z.string().optional(),
  mothersContactNumber: z.string().optional(),
})

const localGuardianUpdateSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
})

const studentUpdateValidationSchema = z.object({
  password: z.string().optional(),
  name: userNameUpdateSchema.optional(),
  gender: z.enum(['male', 'female', 'others']).optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().email().optional(),
  contactNumber: z.string().optional(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string().optional(),
  parmanentAddress: z.string().optional(),
  guardian: guardianUpdateSchema.optional(),
  localGuardian: localGuardianUpdateSchema.optional(),
  profileImage: z.string().optional(),
  admisstionSemester:z.string().optional(),
  academicDepartment:z.string().optional()
})
export const studentValidation = { 
  studentValidationSchema ,
  studentUpdateValidationSchema
}
