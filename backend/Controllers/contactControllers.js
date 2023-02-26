const Contact = require("../model/Contact");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({path:"../config/.env"})

exports.postContact = async (req , res) =>{
    const {name , lastName , email , password} = req.body
    try {
        //simple validation 
        if(!name ||  !lastName || !email || !password){
            return res.status(400).json({msg : "please enter all fields!"})
        }
        //check for existing user
        let user = await Contact.findOne({email})
        if(user){
            return res.status(400).json({msg:"user already exist"})
        }
        //create new User 
        user = new Contact({name, lastName , email , password})
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        user.password = hashedPassword;

        //save User
        await user.save();

        //sign user
        const payload = {
            id:user.id
        }
        //token
        const token = await jwt.sign(payload , process.env.secretOrKey ,{ expiresIn: 60 * 60 })
        res.status(200).send({msg : "User Register With Success" , user , token})
       
        
        
    } catch (error) {
        res.status(500).send({message:"can not save it"})
        console.log(error)
    }
}