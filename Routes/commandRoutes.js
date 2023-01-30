const express = require('express')
const router = express.Router();
const controllers = require('../Controllers/commandControllers');
const Command = require('../model/Command');


//add Command
//method post
//params Body
//path :http://localhost:7001/api/command/new
router.post("/new",controllers.postCommand)



module.exports =router