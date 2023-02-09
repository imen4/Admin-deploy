const express = require('express')
const router = express.Router();
const controllers = require('../Controllers/commandControllers');
const Command = require('../model/Command');



//add command
//method post
//params Body
//path :http://localhost:7001/api/command/new
router.post("/new",controllers.postCommand)

//get Products
//method get
//path :http://localhost:7001/api/command/
router.get("/",async(req,res)=>{
    try {
        const result = await Command.find()
        res.status(200).send({response:result , message:"geting commandss seccessfully"})
    } catch (error) {
        res.send({message:"can not get commands"})
    }
})

//get One Command
//method get
//path :http://localhost:7001/api/command/:id
router.get("/:id",async(req,res)=>{
    try {
        const result = await Command.findOne({_id:req.params.id})
        if(result){
            res.status(200).send({response:result , message:"geting command by ID seccessfully"})
        }else{
            res.status(400).send({message:"there is no command with this id"})
        }
    } catch (error) {
        res.send({message:"can not get command"})
    }
})

//Delete command
//method delete
//path :http://localhost:7001/api/command/:id
router.delete("/:id",async(req,res)=>{
    try {
        const result = await Command.deleteOne({_id:req.params.id})
        res.status(200).send({response:result , message:"delete command by ID seccessfully"})
    } catch (error) {
        res.send({message:"can not delete command"})
    }
})

//Update One command
//method put
//path :http://localhost:7001/api/command/:id
router.put("/:id",async(req,res)=>{
    try {
        const result = await Command.updateOne({_id:req.params.id},{$set:{...req.body}})
        if(result){
            const newResult = await Command.findOne({_id:req.params.id})
            res.status(200).send({response:newResult , message:"update command by ID seccessfully"})
        }else{
            res.status(400).send({message:"there is no command with this id"})
        }
    } catch (error) {
        console.log(error)
        res.send({message:"can not update command"})
    }
})

module.exports =router