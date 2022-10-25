const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        minlength: [5, 'Name cant be less than 5 char']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'Please add a valid email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    emailVerificationToken: String,
    emailTokenExpire: Date,
    verified:Boolean,

},{timestamps:true})



module.exports =  User = mongoose.model('User',userSchema)
