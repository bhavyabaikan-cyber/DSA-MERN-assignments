// ProductAPI.js : //Create product API with below operations
//1. Create new Product ({productId,name,brand,price})
//2. Read all products
//3. Read all product by brand
//4. Update a product
//5. Delete a product by id

//Create mini-express app(Seperate Route) 
import exp from 'express'
export const productApp = exp.Router()  

let products = []
//1. Read all the products
productApp.get('/products', (req, res) => {
    //read all products & send response
    res.json({ message: "All products", payload: products })
})

//2.  Read all product by brand
productApp.get('/products/:brand', (req, res) => {
    //get id of product from url paramter
    let brandOfUrl = req.params.brand
    //filtering the products by brand
    let filteredProducts = products.filter(productObj => productObj.brand === brandOfUrl)
    if (filteredProducts.length === 0)
        return res.json({ message: "Product not found" })
    res.json({ message: "All products by brand", payload: filteredProducts })
})

//3. Pushing the product into products
productApp.post('/products', (req, res) => {
    //get product from client
    const newProduct = { ...req.body, productId: Number(req.body.productId) }
    //push product into products
    products.push(newProduct)
    //send response
    res.json({ message: "Product created" })
})

//4. Update a product
productApp.put('/products', (req, res) => {
    //get updated product from client
    let modifiedProduct = req.body
    //get index of existing product in products array
    let index = products.findIndex(productObj => productObj.productId === modifiedProduct.productId)
    //if product not found
    if (index === -1)
        return res.json({ message: "Product not found" })
    //update product with index
    products.splice(index, 1, modifiedProduct)
    //send response
    res.json({ message: "Product Updated" })
})

//5. Delete a product by id
productApp.delete('/products/:productId', (req, res) => {
    //get id of product from url paramter
    let idOfUrl = Number(req.params.productId)
    //find index of product
    let index = products.findIndex(productObj => productObj.productId === idOfUrl)
    //if product not found
    if (index === -1)
        return res.json({ message: "Product not found" })
    //delete product by index
    products.splice(index, 1)
    //send response
    res.json({ message: "Product removed" })
})
