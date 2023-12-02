export type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
  export type TName = 'Autumn' | 'Summer' | 'Fall'
  export type TCode = '01' |'02' |'03'

export type AcademicSemister = {
    name:TName;
    code: TCode;
    year:string;
    startMonth:TMonth;
    endMonth:TMonth;
}

export type academic_semisterCode_mapper = {
  [key:string]:string
}
export const academicSemisterCodeMapper:academic_semisterCode_mapper ={
  Autumn:'01',
  Summer:'02',
  Fall:'03'
} 