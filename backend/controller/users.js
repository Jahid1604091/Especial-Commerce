const asyncHandler = require("../middleware/async");
const User = require("../models/User");


//@desc     create user
//@route    POST    /api/users
//@access   private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
 
    const user = await User.create(req.body)
    return res.status(200).json({
        success: true,
        data: user
    });
});

//@desc     get all users
//@route    GET     /api/users
//@access   private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find({});
    return res.status(200).json({
        success: true,
        data: users
    });
});

//@desc     get single user
//@route    GET     /api/users/:id
//@access   private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id)
    return res.status(200).json({
        success: true,
        data: user
    });
});
