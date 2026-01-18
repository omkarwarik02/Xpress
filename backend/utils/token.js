const jwt = require('jsonwebtoken');

function createAccessToken(userId){
    return jwt.sign(
        {userId},
        process.env.ACCESS_SECRET,
        {expiresIn:'15m'}
    );
}

function createRefreshToken(userId){
    return jwt.sign(
        {userId},
        process.env.REFRESH_SECRET,
        {expiresIn:'7d'}
    );
}
module.exports = {
  createAccessToken,
  createRefreshToken
};
