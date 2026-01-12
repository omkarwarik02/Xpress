const User = require("../models/user");
const jwt = require('jsonwebtoken');


async function Logout(req,res){
    try{
        const refreshToken = req.cookies.refreshToken;

        if(refreshToken){
            const payload = jwt.verify(
                refreshToken,
                process.env.REFRESH_SECRET
            );
            await User.findByIdAndUpdate(payload.userId,{
                refreshToken:null
            });
        }
        res.clearCookie('refreshToken');
        return res.sendStatus(204);
    }catch(err){
        res.clearCookie('refreshToken');
        return res.sendStatus(204);
    }
}
module.exports = {
    Logout
}