import { z } from 'zod'

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be text',
    })
    .max(20, {
      message: 'password can not be more then 20 ',
    })
    .optional(),
})

export default userValidationSchema
