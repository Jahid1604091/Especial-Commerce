const express = require('express');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');
const ErrorResponse = require('../utils/errorResponse');
const router = express.Router();

router.get('/',asyncHandler(async(req,res,next)=>{
    const products = await Product.find({});
    res.status(200).json(products)
}));

module.exports = router;