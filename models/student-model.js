import mongoose from "mongoose"

let student_schema = new mongoose.Schema({
    full_name:{
        type:String,
        require:true
    },
    roll_number:{
        type:String,
        require:true
    },class:{
        type:String,
        require:true
    },mobile_number:{
        type:String,
        require:true
    },date_of_birth:{
        type:String,
        require:true
    },address:{
        type:String,
        require:true
    }
})

let students = mongoose.model('students',student_schema,"students")

export default students
