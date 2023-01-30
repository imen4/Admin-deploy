const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const commandSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

module.exports = Produit = model("commands",commandSchema)