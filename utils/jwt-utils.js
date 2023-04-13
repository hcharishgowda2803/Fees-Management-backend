import jwt from "jsonwebtoken";


const secretKey = 'Harish@2023#'


export const sign = function (user_id){
    return new Promise((resolve,reject)=>{
        let payload = {
            user_id:user_id
        }
        const accessToken = jwt.sign(payload,secretKey,{expiresIn: 30*24*60*60});
        resolve(accessToken);
    });
}

export const decoded = function (token){
 return new Promise((resolve,reject)=>{
     jwt.verify(token,secretKey,{},(err,user)=>{
         if(err){
             reject(err)
         }else {
             resolve(user)
         }
     })
 })
}



