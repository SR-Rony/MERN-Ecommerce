const express = require("express");
const { login, logout, handleRefreshToken } = require("../../controller/authController");
const { isLoggedIn, isLoggedOut } = require("../../middlewares/auth");
const runValidation = require("../../middlewares/validators");
const authRoute = express.Router()

authRoute.post("/login",isLoggedOut,login)
authRoute.get("/refresh-token",handleRefreshToken)
authRoute.post("/logout",isLoggedIn,logout)

module.exports = authRoute;