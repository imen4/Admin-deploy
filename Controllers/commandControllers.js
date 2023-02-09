const Command = require("../model/Command");

exports.postCommand = async (req , res) =>{
    try {
        //create a new command with the model command
        const newCommand = new Command(req.body)
        //test if command has an price
        if(!req.body.price){
            res.status(400).send({message:"price is required check again"})
            return;
        }
        if(!req.body.name){
            res.status(400).send({message:"name is required check again"})
            return;
        }
        
        //save Command
        const response = await newCommand.save();
        res.status(200).send({response:response , message:"commande is saved"})
    } catch (error) {
        res.status(500).send({message:"can not save it"})
        console.log(error)
    }
}