const express=require('express')
require("./db/mongoose.js")
const path=require('path')
const tasks = require("./models/tasks.js")
const tasksRouter = require('./routers/tasks.js')


const app=express()

const port=process.env.PORT || 4000
const publicDirectoryPath=path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(tasksRouter)

app.listen(port,()=>{
    console.log("server is up and running on ",port)
})