const express = require('express')
const router = express.Router()
const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require('jsonwebtoken')
const  SECRETKEY = "THISISOURSECRETKEYFORJSONWEBTOKEN"

router.post("/registration" , async(req,res) => {
    try{
        const hashedPassword = await bcryptjs.hash(req.body.password , 10)
        const newUser = new User({
            name : req.body.name,
            email:req.body.email,
            password:hashedPassword,
            admin:req.body.admin
        })
        const response = await newUser.save()
        res.status(200).json({"success":true , "data":response})
    }catch(err){
        res.status(500).json({"success":false , "reason":err})
    }
})


router.post("/login" , async(req,res) => {
    try{
        const isUserPresent = await User.findOne({email:req.body.email})
        if(!isUserPresent){
            res.status(404).json({"success":false , "reason":"User Doesn't Exist"})
        }else{
            const checkPassword = await bcryptjs.compare(req.body.password , isUserPresent.password)
            if(checkPassword){
                const data = {
                    userId : isUserPresent._id,
                    admin : isUserPresent.admin
                }
                const token = jwt.sign(data , SECRETKEY)
                res.status(200).json({"success":true , "data":isUserPresent , "token":token})
            }else{
                res.status(400).json({"success":false , "reason":"Password Mismatched"})
            }
        }
    }catch(err){
        res.status(500).json({"success":false , "reason":err})
    }
})

module.exports = router