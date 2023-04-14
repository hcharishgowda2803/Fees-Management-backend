import Admins from "../models/admin-model.js";
import {handleError, MongooseErrorHandler, response} from "../utils/response-code.js";
import {sign,decoded} from "../utils/jwt-utils.js";
import bcrypt from 'bcrypt';



export const login = async (req,res)=>{
    let {email_address,password} = req.body
    try {
        const adminData = await Admins.findOne({email_address})
        if(adminData){
            const passwordMatch = await bcrypt.compare(password,adminData.password)
            if(passwordMatch){
                const token =await sign(email_address);
                res.json({token})
            }else {
                handleError(404,"Password is incorrect",res)
            }

        }else{
            handleError(404,"Admin Not Fount",res)
        }
    } catch (err){
        MongooseErrorHandler(err,res)
    }

}

export const authenticateToken = async (req,res,next)=>{
    const authHeader =  req.headers.authorization
    await decoded(authHeader).then((user)=>{
        next()
    }).catch((err)=>{
        response(403,'Invalid Token',res)
    })

}
