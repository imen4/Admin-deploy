const express = require('express')
const router = express.Router();
const controllers = require('../Controllers/produitControllers');
const Produit = require('../model/Produit');

//test Routing
router.get('/hello',(req,res)=>{
    res.send('hello routing..')
})

//add Produit
//method post
//params Body
//path :http://localhost:7001/api/product/new
router.post("/new",controllers.postProduit)

//get Products
//method get
//path :http://localhost:7001/api/product/
router.get("/",async(req,res)=>{
    try {
        const result = await Produit.find()
        res.status(200).send({response:result , message:"geting products seccessfully"})
    } catch (error) {
        res.send({message:"can not get products"})
    }
})

//get One Product
//method get
//path :http://localhost:7001/api/product/:id
router.get("/:id",async(req,res)=>{
    try {
        const result = await Produit.findOne({_id:req.params.id})
        if(result){
            res.status(200).send({response:result , message:"geting product by ID seccessfully"})
        }else{
            res.status(400).send({message:"there is no product with this id"})
        }
    } catch (error) {
        res.send({message:"can not get product"})
    }
})

//Delete product
//method delete
//path :http://localhost:7001/api/product/:id
router.delete("/:id",async(req,res)=>{
    try {
        const result = await Produit.deleteOne({_id:req.params.id})
        res.status(200).send({response:result , message:"delete product by ID seccessfully"})
    } catch (error) {
        res.send({message:"can not delete product"})
    }
})

//Update One product
//method put
//path :http://localhost:7001/api/product/:id
router.put("/:id",async(req,res)=>{
    try {
        const result = await Produit.updateOne({_id:req.params.id},{$set:{...req.body}})
        if(result){
            const newResult = await Produit.findOne({_id:req.params.id})
            res.status(200).send({response:newResult , message:"update product by ID seccessfully"})
        }else{
            res.status(400).send({message:"there is no product with this id"})
        }
    } catch (error) {
        console.log(error)
        res.send({message:"can not update product"})
    }
})

module.exports =router