const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null, '/uploads')
    },
    filename:function(req,res,cb){
        cb(null,file.originalname)
    }

});

const fileFilter = (req,res,cb)=>{
    const allowedTypes = /jpeg|jpg|png|webp/;
    const isValid = allowedTypes.test(file.mimetype) && allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if(isValid){
        cb(null,true);
    }else{
        cb(new Error('Only image files are allowed'));
    }
};

//Multer instance
const upload = multer({
    storage,
    limits:{
        fileSize:5 * 1024 * 1024
    },
    fileFilter
});
module.exports = upload;