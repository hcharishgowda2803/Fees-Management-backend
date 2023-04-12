import express from "express";
import bodyParser from "body-parser";
// import cors from "cors"
import mongoose from "mongoose"
import adminRouter from "./routers/admin-router.js";
import authRouter from "./routers/auth-router.js";




const app = express();
const PORT = 3000



//middlewares
app.use(bodyParser.json());
// app.use(cors);

//mongodb connection
mongoose.connect('mongodb+srv://root:root123@harish.tabtvlq.mongodb.net/sample',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Mongodb connected successfully')
}).catch(()=>{
    console.log('Mongodb not connected successfully')
})


app.get('/',(req,res)=>{
    res.send('sever is listing at '+ PORT)
})

app.use('/admins',adminRouter);
app.use('/login',authRouter);





app.listen(PORT,()=>{
    console.log('sever started at '+PORT)
})
