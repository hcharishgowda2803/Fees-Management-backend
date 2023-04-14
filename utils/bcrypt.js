import bcrypt from "bcrypt"



//generating salting
export const encrypt = async function (password){
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        return hash
    }catch (err){
        throw err
    }
}
