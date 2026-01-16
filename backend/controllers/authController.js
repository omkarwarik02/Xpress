require('dotenv').config();
const User = require("../models/user");
const authService = require("../services/auth.services");
const jwt = require('jsonwebtoken');

async function login(req , res){
    try{
        const {email, password} = req.body;
        const {accessToken, refreshToken, user} = await authService.LogOrReg(email,password);

        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:'strict'
        });
        return res.status(200).json({
            accessToken,
            user
        });

    } catch(error){
        res.status(400).json({message:error.message});
    }
}
module.exports = {
    login
}
