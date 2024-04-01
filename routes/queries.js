const express = require('express')
const router = express.Router()
const Query = require("../models/Query")

router.post("/add-query" , async(req,res) => {
    try{
        const newQuery = new Query({
            name:req.body.name,
            email:req.body.email,
            contact:req.body.contact,
            query:req.body.query
        })
        const response = await newQuery.save()
        res.status(200).json({"success":true , "data":response})
    }catch(err){
        res.status(500).json({"success":false , "reason":err})
    }
})

router.get("/read-query" , async(req,res) => {
    try{
        const response = await Query.find()
        res.status(200).json({"success":true , "data":response})
    }catch(Err){
        res.status(500).json({"success":false , "reason":Err})
    }
})

router.delete("/delete-query/:id" , async(req,res) => {
    try{
        const id = req.params.id;
        const isQueryPresent = await Query.findOne({_id:id})
        if(!isQueryPresent){
            res.status(404).json({"success":false , "reason":"Data Doesn't Exist!!"})
        }
        else{
            const response = await Query.findByIdAndDelete({_id:id})
            res.status(200).json({"success":true , "data":response})
        }
    }catch(Err){
        res.status(500).json({"success":false , "reason":Err})
    }
})

module.exports = router