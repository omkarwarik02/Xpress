require('dotenv').config();
const User = require('../models/user');

const express = require("express");
const bcrypt  = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { createAccessToken, createRefreshToken } = require("../utils/token");

async function  LogOrReg(email,password){


if(!email || !password){
    throw new Error("Invalid email or password");
}
let user = await User.findOne({email});

if(!user){
    const hashedPassword = await bcrypt.hash(password,10);
        user = await User.create({
      email,
     password:hashedPassword
});
}


//login
  else {
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }
  }


//tokens
const accessToken = createAccessToken(user._id);
const refreshToken = createRefreshToken(user._id);

return {
    accessToken,
    refreshToken,
    user:{
        id:user._id,
        email:user.email
    }
};
}
module.exports = {
    LogOrReg
};