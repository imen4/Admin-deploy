const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const produitSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    description: String
})

module.exports = Produit = model("produits",produitSchema)