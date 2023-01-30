const { json } = require('express');
const express = require('express');
require("dotenv").config({path:"./config/.env"});
const connectDB = require("./config/connectDB")

const contactRouter = require('./Routes/contactRoutes')
const produitRouter = require('./Routes/produitRoutes')
const commandRouter = require('./Routes/commandRoutes')

const app = express();
connectDB()

//create Route
//middleware
app.use(express.json())
app.use('/api/contact',contactRouter)
app.use('/api/product',produitRouter)
app.use('/api/command',commandRouter)

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err)=>{
    err? console.log(err)
    : console.log(`server is running on port ${PORT}`)
})