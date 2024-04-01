const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    admin:{
        type:Boolean,
        default:false
    }
})

const userModel = new mongoose.model("user" , userSchema)

module.exports = userModel;