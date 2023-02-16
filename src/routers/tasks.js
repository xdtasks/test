const tasks = require("../models/tasks.js")
const express=require("express")
const router = new express.Router()


router.get("/test",(req,res)=>{
    res.send({
        name:"server is working"
    })
})


router.post("/tasks",async(req,res)=>{
    const user = new tasks(req.body)
    console.log(user)
    try{
     await user.save()
     console.log("Data sent to backend")    
     res.status(201).send({user})
   //  alert("Success")
    }catch(e){
    console.log(e)
     res.status(400).send({error:"unable to register"})
    }
})

router.get("/task",async(req,res)=>{
    console.log("got request")
    tasks.find().then((tasks)=>{
        console.log(tasks.length)
       if(tasks == 0) 
            res.status(200).send({tasks:"no categories"})
      //  tasks.length == 0 ? res.status(200).send("No tasks / categories") : res.status(200).json(tasks)
       else
            res.status(200).json(tasks)
    }).catch((err)=>{
        // console.log(err)
        res.status(400).send({error:"unable to get tasks"})
    })
})

module.exports = router