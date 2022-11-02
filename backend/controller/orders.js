const asyncHandler = require("../middleware/async");
const Order = require("../models/Order");


//@route    /api/orders/
//@desc     post create a new order
//@access   protected
exports.createOrder = asyncHandler(async (req, res) => {
    const order = new Order({...req.body, user:req.user._id})
    const newOrder = await order.save()
    return res.status(200).json({
        success: true,
        data: newOrder
    });
})

//@route    /api/orders/myorders
//@desc     GET get my orders
//@access   protected
exports.getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({user:req.user._id})
    return res.status(200).json({
        success: true,
        data: orders
    });
})

//@route    /api/orders/myorders/:id
//@desc     GET get one of my order details
//@access   protected
exports.getMyOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user','id name email')
    return res.status(200).json({
        success: true,
        data: order
    });
})

//@route    /api/orders/
//@desc     GET all  orders
//@access   protected/Admin
exports.getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user','id name')
    return res.status(200).json({
        success: true,
        data: orders
    });
})