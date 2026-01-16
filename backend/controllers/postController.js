const { decode } = require("jsonwebtoken");
const Post = require("../models/post");

async function CreatePost(req, res, next){
    try {
        

        if(!req.file){
             return res.status(400).json({
                message:"Image is required",
            })
        }
        const post = await Post.create({
            image:req.file.path,
            caption:req.body.caption,
            user:req.user.id
        })

        //response

        res.status(201).json({
            success:true,
            data:post
        })
    } catch (error) {
            next(error);
    }
}
module.exports = {CreatePost};