//user authentication
const userRouter = require('express').Router();
const {response} = require('express');
const User = require("../models/user")

// //get users
// userRouter.get('/',(req, res, next)=>{
//     User.find({})
//     .then(res=>{
//         response.status(200).send(res)
//     })
//     .catch(err=> {
//         console.log(err)
//         response.sendStatus(501).send({error: "Internal Server Error"});
//         next();
//     })
// })
    
        

//create ie. sign up a user
userRouter.post('/signup', async (request,response, next)=>{
    
    const name = request.body.name
    const email= request.body.email
   
    const passwordHash= bcrypt.hashSync(request.body.password, 10) 

      userData={username, email, passwordHash}  
    

    if (!isEmpty(userData) ){
        // const user = new User(request.body)
             const userCount = await User.countDocuments();

        const newUser = new User({
            id: userCount +1,
            name: name,
            email:email,
            passwordHash: password 

        })
        newUser.save()
        .then(res=> {
            response.status(201).send({status: "User Created"});
        })
        .catch(err=> {
            console.log(err)
            response.sendStatus(400).send({status: "Unable to save"});
        })
    }
    else{
        response.status(400).send({error: 'Missing field'})
    }
})

//Login
userRouter.post('/login', async(req, res, next)=>{
    const email = request.body.email
    const password = request.body.password

    if(email && password)
     await User.findOne({username: username})
    if(bcrypt.compareSync(password, user.passwordHash)){
        response.status(401).send('logged in')
    }
    else{
        response.status(400).send('incorrect password')
    }
})

module.exports = userRouter
