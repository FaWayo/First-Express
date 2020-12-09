const express = require ('express')
const app = express()
const mongoose = require ('mongoose')



const bodyParser = require('body-parser');
// const router = express.Router()
const userRouter = require('./controllers/user')
const postRouter = require('./controllers/post')
require('dotenv').config()


const config= {
   useNewUrlParser: true,
   useUnifiedTopology: true
}

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-TypeError, Accept')
    next()
})

mongoose.connect(process.env.MONGODB_URI,{},)
.then(()=>{
    console.log('Mongo DB connected successfully') 
})
.catch((error)=>{
console.log('Connection Unsuccessful')
})
   
app.use('/user', userRouter)
app.use('/post', postRouter)



app.listen(process.env.PORT, ()=>{
  console.log("server started succesfully")
})



module.exports = app;