import { Types } from "mongoose"

export type AcademicDepartmentType = {
    name:string
    accademicFaculty:Types.ObjectId
}