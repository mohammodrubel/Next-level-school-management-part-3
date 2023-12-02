import { Schema, model } from 'mongoose'
import { Tuser } from './user_interface'
import bcrypt from 'bcrypt'

const userSchema = new Schema<Tuser>(
  {
    id: {
      type: String,
    },
    password: {
      type: String,
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'faculty', 'student'],
    },
    isDeleted: {
      type: Boolean,
    },
    status: {
      type: String,
      enum: ['active', 'blocked'],
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  try {
    const saltRounds = 10
    const hashPassword = await bcrypt.hash(this.password, saltRounds)
    this.password = hashPassword
    next()
  } catch (error) {
    next()
  }
})

export const User = model<Tuser>('User', userSchema)
