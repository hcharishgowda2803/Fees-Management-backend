import mongoose from "mongoose";




let admin_schema = new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    email_address:{
        type:String,
        require: true
    },
    mobile_number:{
        type:String,
        require: true
    },
    password:{
           type: String,
           required: true
    },
    _id:{
        type:String,
        require:true
    }

})

let Admins = mongoose.model('admin',admin_schema,"admins");

export default Admins
