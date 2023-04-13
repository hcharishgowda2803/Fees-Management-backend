import students from "../models/student-model.js";
import {MongooseErrorHandler, response} from "../utils/response-code.js";


export const getAllStudents = async (req,res)=>{
    await students.find().exec().then((students)=>{
     response(200,students,res)
    }).catch((err)=>{
        MongooseErrorHandler(err,res)
    })
}

export const getStudentById = async (req,res)=>{
    await students.findById(req.params.id).exec().then((student)=>{
      response(200,student,res)
    }).catch((err)=>{
        MongooseErrorHandler(err,res)
    })
}

//search using name rollnumber mobile number
//search and get api is almost same if we pass a params in same api we can search

export const searchByRollNumber =  (req,res)=>{
    let {roll_number,mobile_number}=req.query
    let query = {};
    if(roll_number){
        query.roll_number = roll_number
    }
    if(mobile_number){
        query.mobile_number = mobile_number
    }
     students.find(query).exec().then((student)=>{
        response(200,student,res)
    }).catch((err)=>{
        MongooseErrorHandler(err,res)
    })
}


export const addStudent = (req,res)=>{
 const new_student = new students(req.body);
    new_student.save().then((student)=>{
        response(200,student,res)
    }).catch((err)=>{
        MongooseErrorHandler(err,res)
    })
}

export const updateStudent = (req,res)=>{
     students.findByIdAndUpdate(req.params.id,req.body).exec().then((student)=>{
        return response(200,student,res)
     }).catch(()=>{
        MongooseErrorHandler(err,res)
     })
}
