import { Schema, model } from "mongoose";
import { Academic_faculty_interface } from "./academic_faculty_interface";

const academic_facalty_model = new Schema<Academic_faculty_interface>({
    name:{
        type:String
    }
},{
    timestamps:true
})

export const AcademicFacaulty = model<Academic_faculty_interface>('Academic-Faculty',academic_facalty_model)