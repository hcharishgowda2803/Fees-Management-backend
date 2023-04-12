import jwt, {decode} from "jsonwebtoken";


const secretKey = 'Harish@2023#'


module.exports.sign = function (user_id){
    return new Promise((resolve,reject)=>{
        let payload = {
            user_id:user_id
        }
        const accessToken = jwt.sign(payload,secretKey,{expiresIn: 30*24*60*60});
        resolve(accessToken);
    });
}

module.exports.decoded = function (token){
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secretKey,{},(error,decode)=>{
            if(error){
                reject('invalid Token');
            }else {
                resolve(decode)
            }
        })
    })
}
