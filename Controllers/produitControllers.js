const Produit = require("../model/Produit");

exports.postProduit = async (req , res) =>{
    try {
        //create a new produit with the model produit
        const newProduit = new Produit(req.body)
        //test if produit has an price
        if(!req.body.price){
            res.status(400).send({message:"price is required check again"})
            return;
        }
        if(!req.body.name){
            res.status(400).send({message:"name is required check again"})
            return;
        }
        
        //save produit
        const response = await newProduit.save();
        res.status(200).send({response:response , message:"product is saved"})
    } catch (error) {
        res.status(500).send({message:"can not save it"})
        console.log(error)
    }
}