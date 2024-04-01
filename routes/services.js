const express = require('express')
const router = express.Router()
const Service = require("../models/Service")

router.post("/add-service", async(req, res) => {
    try {
        const newService = new Service({
            image: req.body.image,
            name: req.body.name,
            description: req.body.description,
            quality1: req.body.quality1,
            quality2: req.body.quality2,
            quality3: req.body.quality3,
            quality4: req.body.quality4,
            quality5: req.body.quality5,
            quality6: req.body.quality6
        })
        const response = await newService.save()
        res.status(200).json({"success":true , "data":response})
    } catch (Err) {
        res.status(200).json({"success":true , "reason":Err})
    }
})


router.get("/read-service" , async(req,res) => {
    try{
        const response = await Service.find()
        res.status(200).json({"success":true , "data":response})
    }catch(err){
        res.status(200).json({"success":true , "reason":err})
    }
})

router.get("/read-service/:id" , async(req,res) => {
    try{
        const id = req.params.id;
        const response = await Service.find({_id:id})
        res.status(200).json({"success":true , "data":response})
    }catch(err){
        res.status(200).json({"success":true , "reason":err})
    }
})

router.put("/update-service/:id" , async(req,res) => {
    try{
       const id = req.params.id
       const response = await Service.findByIdAndUpdate({_id:id} , req.body , {new : true} )
       res.status(200).json({"success":true , "data":response})
    }catch(Err){
        res.status(200).json({"success":true , "reason":Err})
    }
})

router.delete("/delete-service/:id" , async(req,res) => {
    try{
        const id = req.params.id
        const response = await Service.findByIdAndDelete({_id:id})
        res.status(200).json({"success":true , "data":response})
    }catch(Err){
        res.status(200).json({"success":true , "reason":Err})
    }
})


module.exports = router