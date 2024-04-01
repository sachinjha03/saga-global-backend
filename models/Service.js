const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    image:String,
    name:String,
    description:String,
    quality1:String,
    quality2:String,
    quality3:String,
    quality4:String,
    quality5:String,
    quality6:String
})

const serviceModel = new mongoose.model("service" , serviceSchema)

module.exports = serviceModel;