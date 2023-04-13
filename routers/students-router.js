import express from "express"
import {authenticateToken} from "../controllers/auth-controller.js";
import {
    addStudent,
    getAllStudents,
    getStudentById, searchByRollNumber,
    updateStudent
} from "../controllers/student-controller.js";




const router = express.Router();

router.get('/',authenticateToken,searchByRollNumber);

router.get('/:id',authenticateToken,getStudentById);

router.post("/",authenticateToken,addStudent);

router.put('/',authenticateToken,updateStudent);



export  default  router
