const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const { protect } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,'uploads/products/')
    },
    filename(req,file,cb){
        cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkType(file,cb){
    const fileTypes = /jpg|jpeg|png/
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = fileTypes.test(file.mimetype)

    if(extName && mimeType){
        return cb(null,true)
    }
    else{
        cb('Only support image type')
    }
}

const upload = multer({
    storage,
    fileFilter:function(req,file,cb){
        checkType(file,cb)
    }
})

router.post('/',upload.single('image'),(req,res)=>{
    res.send(`/${req.file.path}`)
})


module.exports = router;