const Product = require('../models/Product');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const path = require('path');
const { unlink } = require('fs');
//@desc     create product
//@route    POST    /api/products
//@access   private/Admin
exports.createProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.create({ ...req.body, user: req.user })
    return res.status(200).json({
        success: true,
        data: product
    });
});

//@desc     update product
//@route    PUT    /api/products/:id
//@access   private/Admin
exports.updateProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, runValidators: true
    })
    return res.status(200).json({
        success: true,
        data: product
    });
});

//@route    /api/products?q='df'
//@desc     get all products
//@access   public
exports.getAllProducts = asyncHandler(async (req, res) => {
    const per_page = 4;
    const page = Number(req.query.pageNumber) || 1;
    let query = '';
    query = req.query.q ? {
        name: {
            $regex: req.query.q,
            $options: 'i'
        }
    } : {};
    const count = await Product.count({ ...query })
    const products = await Product.find({ ...query }).limit(per_page).skip(per_page * (page - 1));
    res.status(200).json({
        products,
        page,
        pages: Math.ceil(count / per_page)
    })

});

//@route    /api/products/top
//@desc     get all top products
//@access   public
exports.getTopProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ rating: -1 })
    res.status(200).json({
        products
    })
});

//@route    /api/products/:id
//@desc     get product
//@access   public
exports.getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product)
});

//@route    /api/products/:id
//@desc     DELETE product
//@access   protected/admin
exports.deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(product.image)
    //remove the image
    unlink(path.join(__dirname, `../${product?.image}`),
        (err) => {
            err && console.log(`Error in Removing File ${err}`)
        }
    )

    await product.remove();
    return res.status(200).json({
        success: true,
        data: product.name + ' is removed!'
    });
});

//@route    /api/products/:id/review
//@desc     post    review product
//@access   protected
exports.reviewProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    //check if product already reviewed
    if (product.reviews.find(u => u.user.toString() === req.user._id.toString())) {
        return next(new ErrorResponse('You can review a product once', 400))
    }
    //else

    //review
    if (!req.body.rating || !req.body.comment) {
        return next(new ErrorResponse('Please add review and rating', 400))
    }
    const review = {
        ...req.body,
        name: req.user.name,
        user: req.user._id,
    }

    product.reviews.push(review)

    //total reviews
    product.numReviews = product.reviews.length
    //avg rating
    product.rating = product.reviews.reduce((acc, prod) => prod.rating + acc, 0) / product.reviews.length
    await product.save();
    return res.status(201).json({
        success: true,
        message: 'review added'
    });
});

