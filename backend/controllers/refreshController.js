const jwt = require('jsonwebtoken');
const User = require("../models/user");

async function Refresh(req, res) {
    try{
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken){
           return res.sendStatus(401);
        }
        const payload = jwt.verify(
            refreshToken,
            Process.env.REFRESH_SECRET
        );
        const user = await UserActivation.findById(payload.userId);
        if(!user || user.refreshToken !== refreshToken){
            return res.sendStatus(403);
        }

        const newAccessToken = jwt.sign(
            {userId: user._id},
            process.env.ACCESS_SECRET,
            {expiresIn:'15m'}
        );
        return res.json({accessToken:newAccessToken});
    }
    catch(error){
        return res.sendStatus(403);
    }
};
module.exports = {
    Refresh
}