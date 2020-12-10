//user authentication
const userRouter = require('express').Router();
const {response}=require('express')
const User = require("../models/user")
const bcrypt = require('bcrypt')

//get users
userRouter.get('/', (request, response, next)=>{
    User.find({}).then(res=>{
        response.status(200).send(res)
        next();
    })
})

//create ie. sign up a user
userRouter.post('/', async (request,response, next)=>{
    const name = request.body.name
    const passwordHash= bcrypt.hashSync(request.body.password, 10) 
    console.log(request.body)
      if (name && passwordHash ){
      const newUser = new User({
            name: name,
            passwordHash: passwordHash

        })
        newUser.save()
        .then((res)=> {
            response.status(201).send({status: "User Created"});
        })
        .catch((err)=> {
            console.log(err)
            response.sendStatus(400).send({status: "Missing field"});
        })
    }
    else{
        response.status(500).send({error: 'Missing field'})
    }
})

//Login
userRouter.post('/', async(req, res, next)=>{
    const name = request.body.name
    const password = request.body.password

    if(name && password){
    const user = await User.findOne({name: name})
    if(bcrypt.compareSync(password, user.passwordHash)){
        response.status(200).send('logged in')
    }
    else{
        response.status(400).send('no name or password')
    }
}
})

module.exports = userRouter
