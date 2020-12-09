const express = require('express')
const app=require('express')
require('dotenv').config();



app.listen(process.env.PORT, ()=>{
    console.log('Express app is working')
})