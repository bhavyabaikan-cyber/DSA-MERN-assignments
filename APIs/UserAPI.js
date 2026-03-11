//Create mini-express app (Separate route)
import exp from 'express'
import { UserModel } from '../models/UserModel.js'
export const userApp = exp.Router()  //It do not have http server, It creates the special Route
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken' 
import { verifyToken } from '../middlewares/verifyToken.js'
//DEFINE USER REST API Routes
const {sign} = jwt

//user login
userApp.post("/auth",async (req, res) => {
    //get user cred obj from client
    const { email, password } = req.body
    //verify email
    let user = await UserModel.findOne({ email : ElementInternals })
    //if email not existed
    if (!user) {
        return res.status(404).json({ message: "Invalid email" })
    }
    //compare passwords
    let result = await compare(password, user.password)
    //if password not matched
    if (!result) {
        return res.status(400).json({ message: "Invalid password" })
    }

    //if passwords are matched
    //create token(jsonwebtoken-jwt--jaat)
     const signedToken = sign({email:user.email},"abcd",{expiresIn:"1h"}) //"10"--->10 milliseconds, 100---->100 seconds

    //store res in httponlycookie ans send res
     res.cookie("token",signedToken,{
         httpOnly : true,
         sameSite: "lax",
         secure : false
     })
     res.status(200).json({message : "login sucessful",payload : user})
})


//Create new User
userApp.post("/users",verifyToken, async (req, res) => {
    //get new user obj from req
    const newUser = req.body;
    //replace user pasword with hashed password
    const hashedPassword = await hash(newUser.password,10)
    newUser.password = hashedPassword
    //Create new User document
    const newUserDocument = new UserModel(newUser)
    //save
    const result = await newUserDocument.save()
    console.log(result)
    //send res
    res.status(201).json({ message: "User created" })
})
//get all users
userApp.get("/users",verifyToken,async (req, res) => {
  //read all users from db
  let usersList = await UserModel.find();
  //send res
  res.status(200).json({ message: "users", payload: usersList });
});
//Read a User by ObjectId
userApp.get("/users/:id",verifyToken,async (req, res) => {
    //Read object id from req params
    const uid = req.params.id
    //find user by id
    const userObj = await UserModel.findById(uid) //findOne({_id:uid})
    //send res
    res.status(200).json({ message: "user", payload: userObj })
    // if(!userObj){
    //   return res.userObj.json({message : "User not found"})
    // }
})
//Note: Use findOne() method to read a document with non-object id fields
//Use findById() to read documents by object id

//Update a user by id       
userApp.put("/users/:id",async (req, res) => {
    //get modified  user from req
    const modifiedUser = req.body
    const uid = req.params.id
    //find user by id & update
    const updatedUser = await UserModel.findByIdAndUpdate(uid, { $set: { ...modifiedUser } }, { new: true }) //new is used to return updated document
    //send the res

    res.status(200).json({ message: "User modified", payload: updatedUser })

})

userApp.delete("/users/:id",async (req, res) => {
    //Read obj id from req params
    const uid = req.params.id
    //find user by id
    const deletedUser = await UserModel.findByIdAndDelete(uid)
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    //send the res
    res.status(200).json({ message: "User deleted", payload: deletedUser })
})
