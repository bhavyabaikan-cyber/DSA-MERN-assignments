//create express app
import exp from 'express'
import { connect } from 'mongoose'
import {userApp} from "./APIs/UserAPI.js"
import { productApp } from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser'
const app = exp()
app.use(exp.json())
app.use(cookieParser())
//Forward req to UserApp if path starts with /user-api
app.use("/user-api",userApp)
app.use('/product-api',productApp)

//connect to DB server
async function connectDB() {
    try {
        await connect("mongodb://localhost:27017/anuragdb")
        console.log("DB connection success")

        //start server
        app.listen(4000, () => console.log("Server on port 4000..."))
    } catch (err) {
        console.log("err in DB connection: ", err)
    }
}
connectDB() 

//error handling middleware (4contains 4 parameters)
app.use((err,req,res,next)=>{
    console.log(err.name)
    //validation error
    if(err.name === "ValidationError"){
        return res.status(300).json({message : "error occured",error : err.message})
    }
    //cast error
    if(err.name === "CastError"){
        return res.status(300).json({message : "error occured",error : err.message})
    }
    res.status(500).json({message : "error from server",Error : err.message})
  //error=>{name,message,callstack}
})
