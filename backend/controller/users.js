const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const ErrorResponse = require('../utils/errorResponse');

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

//@desc     get profile
//@route    GET     /api/users/profile
//@access   private
exports.getProfile = asyncHandler(async (req, res, next) => {
    res.send(req.user)
    // const user = await User.findById(req.params.id)
    // return res.status(200).json({
    //     success: true,
    //     data: user
    // });
});

//@desc     get auth user
//@route    POST     /api/users/login
//@access   public
exports.authUser = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({email:req.body.email}).select('+password');
    
    if(user && (await user.matchPassword(req.body.password))){
        return res.status(200).json({
            success: true,
            data: user,
            token:user.getSignedJwtToken()
        });
    }
    else{
       
        return next(new ErrorResponse(`Invalid email or password`, 401));
    }
});
