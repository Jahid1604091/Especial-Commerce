const Product = require('../models/Product');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

//@route    /api/products
//@desc     get all products
//@access   public
exports.getAllProducts = asyncHandler(async(req,res,next)=>{
    const products = await Product.find({});
    res.status(200).json(products)
});

//@route    /api/products/:id
//@desc     get product
//@access   public
exports.getProduct = asyncHandler(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    res.status(200).json(product)
});

