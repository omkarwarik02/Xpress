require("dotenv").config();

const authService = require("../services/auth.services");


async function register(req, res) {
  try {
    const { email, password } = req.body;

    const { accessToken, refreshToken, user } = await authService.register(email, password);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(201).json({
      accessToken,
      user,
    });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}



async function login(req, res) {
  try {
    const { email, password } = req.body;

    const { accessToken, refreshToken, user } =
      await authService.login(email, password);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      accessToken,
      user,
    });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  register,
  login,
};
