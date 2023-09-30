const mongoose = require('mongoose');

const sellerSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    mobileNo:{
        type:Number,
        require:true
    },
    accountStatus:{
        type:String, 
        default:"pending"
    }
},{timestamps:true});
 
const sellerModal= mongoose.model("Seller", sellerSchema);

module.exports=sellerModal;
