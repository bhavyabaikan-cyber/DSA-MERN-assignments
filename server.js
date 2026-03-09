  //1.Create HTTP server
import exp from 'express' //since it is a default export so we can use any name
const app = exp()  //we can use any name instead of app to hold express functions  
import {userApp} from "./APIs/user-API.js"
import {productApp} from "./APIs/ProductAPI.js"
//Express application contains http server

//use body parser middleware
app.use(exp.json())   

//Forward req to userApp if path starts with /user-api
app.use('/user-api',userApp)

//Forward req to productApp if path starts with /user-api
app.use('/product-api',productApp)

//set a port number
const port = 3000
//assign port number to http server
app.listen(port, () => console.log(`server listening to port ${port}...`))