const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function authMiddleware(req,res,next){
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer")){
            const error = new Error("Unauthorized");
            error.status = 401;
            throw error;
        }
        const token = authHeader.split(" ")[1];
        
        const decoded = jwt.verify(token, process.env.SECRET);


        const user = await User.findById(decoded.userId).select('-password');
        if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

            

        req.user = {id:decoded.userId};
        next();
    }
    catch(err){
        err.status = err.status || 403;
    next(err);
    }
} 
module.exports = authMiddleware;