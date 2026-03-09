// UserAPI.js : //Create mini-express app(Seperate Route) 
import exp from 'express'
export const userApp = exp.Router() 

//Test Data (Replace this test data with DataBase)
let users = []
//2.Create User API(REST API: REpresentational State Transfer)
//Route to handle GET req of Client (http://localhost:3000/users)
userApp.get('/users', (req, res) => {
    //read all users & send response
    res.json({ message: "All users", payload: users })

})

userApp.get('/users/:id', (req, res) => {
    app.use(middleware1)
    //get id of user from url paramter
    let idOfUrl = Number(req.params.id) //{id : 64}
    //find index of user
    let index = users.findIndex(userObj => userObj.id === idOfUrl)
    //if user not found
    if (index === -1)
        return res.json({ message: "User not found" })
    //read a user by id
    res.json({ message: "A user", payload: users })

})


//Route to handle POST req of Client 
userApp.post('/users', (req, res) => {
    app.use(middleware1)
    //get user from client
    const newUser = req.body
    //push user into users
    users.push(newUser)
    //send response
    res.json({ message: "User created" })

})
//Route to handle PUT req of Client
userApp.put('/users', (req, res) => {
    app.use(middleware1)
    //get updated user from client
    let modifiedUser = req.body
    //get index of existing user in users array
    let index = users.findIndex(userObj => userObj.id === modifiedUser.id)
    //if user not found
    if (index === -1)
        return res.json({ message: "User not found" })
    //update user with index
    users.splice(index, 1, modifiedUser)
    //send response
    res.json({ message: "User Updated" })

})
//Route to handle DELETE req of Client 
userApp.delete('/users/:id', (req, res) => {   // :id is the paramater
    app.use(middleware1)
    //get id of user from url paramter
    let idOfUrl = Number(req.params.id) //{id : 64}
    //find index of user
    let index = users.findIndex(userObj => userObj.id === idOfUrl)
    //if user not found
    if (index === -1)
        return res.json({ message: "User not found" })
    //delete user by index
    users.splice(index, 1)
    //send response
    res.json({ message: "User removed" })

})

// //create mini exp application : special route
// import exp from 'express'
// export const userApp  = exp.Router()


// //Test Data (Replace this test data with DataBase)
// let users = []
// // 2.Create User API(REST API: REpresentational State Transfer)
// // Route to handle GET req of Client (http://localhost:3000/users)
// userApp.get('/users', (req, res) => {
//     //read all users & send response
//     res.json({ message: "All users are : ", payload: users })
// })
// //Route to handle POST req of Client 
// userApp.post('/users', (req, res) => {
//     //get user from client
//     const newUser = req.body
//     //push user into users
//     users.push(newUser)
//     //send response
//     res.json({ message: "User created",newUser })
// })

// //Route to handle PUT req of Client
// userApp.put('/users', (req, res) => {
//     //get updated user from client
//     let modifiedUser=req.body
//     //get index of existing user in users array
//     let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
//     //if user not found
//     if(index===-1)
//         return res.json({message:"User not found"})
//     //update user with index
//     users.splice(index,1,modifiedUser)
//     //send response
//     res.json({message:"User Updated"})
// })

// //Route to handle DELETE req of Client 
// userApp.delete('/users/:id', (req, res) => {
//     //get id from url
//      let deleteid = Number(req.params.id)
//      //checking if id is present in array or not
//      let found = users.find((user) => user.id === deleteid)
//      //deleting user with url id
//      if(found == undefined) {
//         return res.json({message : "User not found with id ",deleteid})
//      }
//      users.splice(found,1)
//      // sending response
//      res.json({message:"User deleted with id",deleteid})
// })

// //get user by id
// userApp.get('/users/:id',(req,res) =>{
//     //get id from url
//      let idofurl = Number(req.params.id)
//     //find index of user
//     const index = users.find((user) => user.id ===idofurl)
//     //delete user
//     if(index == undefined){
//         return res.json({message:"User not found"})
//     }
//     //response
//     res.json({message:"user found",index}) 
// })
