const express = require('express');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');
const ErrorResponse = require('../utils/errorResponse');
const router = express.Router();

router.get('/',asyncHandler(async(req,res,next)=>{
    const products = await Product.find({});
    // return next(new ErrorResponse({message:'Bad request'},401))
    res.status(200).json(products)
}));

router.get('/:id',asyncHandler(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    res.status(200).json(product)
}));

module.exports = router;