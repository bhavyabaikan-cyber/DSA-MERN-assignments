import exp from 'express'
import {productModel} from '../models/ProductModel.js'
export const productApp = exp.Router()

productApp.post('/products',async (req,res) => {
    //get newProduct from body
    const newProduct = req.body
    const newProductDocument = new productModel(newProduct)
    const result = await newProductDocument.save()
    console.log(result)
    res.status(201).json({message : "Product created"})
})

//get all products
productApp.get('/products',async (req,res) => {
    let productList = await productModel.find()
    res.status(200).json({message : "All Products",payload : productList})
})

//read a product by productId
productApp.get('/products/:productId',async (req,res) => {
        //Read object id from req params
        const pid = Number(req.params.productId)
        //find user by id
        const productObj = await productModel.findOne({ productId: pid }) //findOne({_id:uid})
        //send res
        res.status(200).json({ message: "product", payload: productObj })
})

//Update a product by productId
productApp.put('/products/:productId',async (req,res) => {
    const pid = Number(req.params.productId)
    const newobj = req.body
    const updatedProduct = await productModel.findOneAndUpdate({productId: pid}, { $set: { ...newobj } }, { new: true })
    res.status(200).json({ message: "Product modified", payload: updatedProduct })
})

//Delete a product by productId
productApp.delete('/products/:productId',async (req,res) => {
    const pid = Number(req.params.productId)
    const productObj = await productModel.findOneAndDelete({ productId: pid }) 
    res.status(200).json({ message: "Product deleted : ", payload: productObj })
})

