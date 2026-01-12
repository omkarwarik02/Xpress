const jwt = require('jsonwebtoken');

function authMiddleware(req,res,next){
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer")){
            const error = new Error("Unauthorized");
            error.status = 401;
            throw error;
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.user = decoded;
        next();
    }
    catch(err){
        err.status = err.status || 403;
    next(err);
    }
} 
module.exports = authMiddleware;