import {Schema,model} from 'mongoose'

const productSchema = new Schema({
    productId : {
        type : Number,
        required : [true,"ProductId must require"]
    },
    productName : {
        type : String,
        required : [true,"Product Name must be Required"],
    },
        //  c.price(required, min price 10000 and max price 50000)
     price : {
        type : Number,
        required : [true,"Price must require"],
        min : [10000,"Price should be 10000"],
        max : [50000,"Price shouldn't exeed 50000"]
     },
     brand : {
        type : String,
        required : [true,"Brand must require"],
     }
})

export const productModel = model("product",productSchema)