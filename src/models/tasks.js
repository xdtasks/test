const mongoose = require("mongoose")


const tasksSchema = mongoose.Schema({
    code:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    On:{
        type:String,
        required:true,
        trim:true
    },
    key:{
        type:String,
        required:true,
        trim:true
    },
    value:{
        type:String,
        required:true,
        trim:true
    }
 /*   tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
     ] */
})

tasksSchema.methods.toJSON = function(){
    const user = this
    const userObj = user.toObject()
    delete userObj.tokens
    return userObj
} 

//creating a task model
const tasks = mongoose.model('tasks',tasksSchema)

module.exports=tasks