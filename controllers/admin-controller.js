import {handleError, MongooseErrorHandler, response} from "../utils/response-code.js";
import Admins from "../models/admin-model.js";




//get all admins
export const getAdmins = (req,res)=>{
    Admins.find().exec().then((admins)=>{
      return response(200,admins,res)
    }).catch((err)=>{
       return MongooseErrorHandler(err,res)
    })
}

//get by id
export const getByIds = (req,res)=> {
    Admins.findById(req.params.id).exec().then((admin)=>{
        if(!admin){
            return handleError(404,"Admin not fount",res)
        }
        response(200,admin,res)
    }).catch((err)=>{
        MongooseErrorHandler(err,res)
    })

}


//register or add admins
export const addAdmins = (req,res)=>{
    let {name,mobile_number,email_address,password} = req.body;
    Admins.findOne({mobile_number:mobile_number}).exec().then(doc =>{
        if(doc){
            return handleError(409,'Already Existed',res)
        }
        let regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
        if (!regex.test(password)) {
            return handleError(400, 'Password should consists of 8 characters with 1 uppercase, 1 special character and 1 number', res);
        }
        const generateIds = ()=>{
            const randomNumbers = Math.floor(Math.random()*10000);
            return `admin-${randomNumbers}`
        }
        const user_id = generateIds();
        const new_user = new Admins({
            _id:user_id,
            name:name,
            mobile_number:mobile_number,
            email_address:email_address,
            password:password
        })
        new_user.save().then(()=>{
            return response(200,{user_id: new_user._id},res)
        }).catch((err)=>{
            return MongooseErrorHandler(err,res)
        })
    }).catch(err=>{
        return MongooseErrorHandler(err,res)
    })
}


//update admins

export const updateAdmin = (req,res)=>{
    Admins.findByIdAndUpdate(req.params.id,req.body).exec().then((admin)=>{
      return response(200,admin,res)
    }).catch((err)=>{
        return MongooseErrorHandler(err,res)
    })
}







