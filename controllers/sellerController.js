const sellerDB = require('../models/seller.model');
const response= require('../middlewares/responseMiddleware');
const asynchandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const jwt =require('../utils/jwt')

const test = asynchandler(async (req, res) => {
    response.successResponse(res, '', 'Superadmin routes established');
})


const createSeller= asynchandler(async(req, res)=>{
    try {
        const {name, email, password, mobileNo}=req.body;
        if(!name, !email, !password, !mobileNo){
            return response.validationError(
                res, 'Cannot create seller without proper details'
            )
        }
        const findEmail= await sellerDB.findOne({email:email});
        if(findEmail){
            return response.errorResponse(res, "Account already exists.")
        }
        const hashedPassword= await bcrypt.hash(password, await bcrypt.genSalt(10));
        const newSeller = new sellerDB({
            name:name,
            password:hashedPassword,
            email:email,
            mobileNo:mobileNo
        })
        const savedSeller= await newSeller.save();
        response.successResponse(res, savedSeller, "Seller Successfully Created.")
    } catch (error) {
        response.internalServerError(res, 'failed to create a seller');
    }
})


module.exports={ test,  createSeller }