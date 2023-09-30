const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors')
const port = process.env.PORT || 5000;
const connectDB = require('./db/connect');
const bodyParser = require("body-parser");
require("dotenv").config();
const app=express();


const sellerRoute= require("./routes/sellerRoute")


 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/api/seller", sellerRoute);




// server test route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Saloon server is running" })

})
//connection to database
connectDB(process.env.MONGO_URI);

//server listenng 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



