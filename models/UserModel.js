import {Schema,model} from 'mongoose'

//create user schem
const userSchema = new Schema({
    username : {
        type : String,
        required : [true,'Username is required'],
        minlength : [4,"minimum length of user name is 4"],
        maxlength : [6,"Username size exceeds 6"],
    },
    password : {
        type : String,
        required : [true,"Password required"],
    },
    email : {
        type : String,
        required : [true,"Required"],
        unique : [true,"Username already exist"],
    },
    age : {
        type : Number,
    }
},{
   timestamps : true,
   versionKey : false,
})

// Generate user model
export const UserModel = model("user",userSchema)