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