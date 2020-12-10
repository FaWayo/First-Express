const express = require ('express')
const app = express()
const bodyParser=require('body-parser')
const mongoose = require ('mongoose')
const userRouter = require('./controllers/user')
const postRouter = require('./controllers/post')
require('dotenv').config()

const PORT = process.env.PORT

const config= {
   useNewUrlParser: true,
   useUnifiedTopology: true
}


mongoose.connect(process.env.MONGODB_URI, config)
.then(()=>{
    console.log('Mongo DB connected successfully') 
})
.catch(err =>{
console.log('Connection Unsuccessful', err)
})
 
app.use(bodyParser.json());
app.use(express.json())
 
 //routes
app.use('/user', userRouter)
app.use('/post', postRouter)




app.listen(PORT, ()=>{
  console.log("server started succesfully", PORT)
})



module.exports = app;