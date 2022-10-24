const express = require('express');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');
const ErrorResponse = require('../utils/errorResponse');
const router = express.Router();

router.get('/',asyncHandler(async(req,res,next)=>{
    const products = await Product.find({});
    if(products.length === 0){
        return next(new ErrorResponse(`No Product found`,404));
    }
    res.status(200).json(products)
}));

module.exports = router;