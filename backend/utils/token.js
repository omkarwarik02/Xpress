const jwt = require('jsonwebtoken');

function createAccessToken(userId){
    return jwt.sign(
        {userId},
        process.env.SECRET,
        {expiresIn:'15m'}
    );
}

function createRefreshToken(userId){
    return jwt.sign(
        {userId},
        process.env.SECRET,
        {expiresIn:'7d'}
    );
}
module.exports = {
  createAccessToken,
  createRefreshToken
};
