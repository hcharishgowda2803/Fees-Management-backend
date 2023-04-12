// import {sign,decoded} from "../utils/jwt-utils.js"


export const login = (req,res)=>{
    let {email,password}=req.body
    res.send(req.body)


}
