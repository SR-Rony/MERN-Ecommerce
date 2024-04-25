const express = require("express");
const { login, logout } = require("../../controller/authController");
const { isLoggedIn, isLoggedOut } = require("../../middlewares/auth");
const authRoute = express.Router()

authRoute.post("/login",isLoggedOut,login)
authRoute.post("/logout",isLoggedIn,logout)

module.exports = authRoute;