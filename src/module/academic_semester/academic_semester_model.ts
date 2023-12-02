import { Schema, model } from "mongoose";
import { AcademicSemister, TCode, TMonth, TName } from "./academic_semester_interface";
import { AppError } from "../middelware/appError";
import httpStatus from "http-status";

const name :TName[]= ['Autumn' , 'Summer' , 'Fall']
const code:TCode[] = ['01' ,'02' ,'03']
const month:TMonth[] = ['January','February','March','April','May','June','July','August','September','October','November','December']
const academic_semester_schema = new Schema<AcademicSemister>({
    name:{
        type:String,
        enum:name
    },
    code:{
        type:String,
        enum:code
    },
    year:{
        type:String,
    },
    startMonth:{
        type:String,
        enum:month
    },
    endMonth:{
        type:String,
        enum:month
    }
},
{
    timestamps:true
})


    academic_semester_schema.pre('save',async function(next){
        try{
            const isSemisterExist = await AcademicSemesterModel.findOne(
                {
                  year : this.year,  
                  name : this.name  
                }
            )
            if(isSemisterExist){
                throw new AppError(httpStatus.NOT_FOUND,'semister already exist')
            }
            next()
        }
        catch(error:any){
            next(error.message)
        }
    })




export const AcademicSemesterModel = model<AcademicSemister>('AcademicSemister', academic_semester_schema)