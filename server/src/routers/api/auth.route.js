const express = require("express");
const { login, logout } = require("../../controller/authController");
const { isLoggedIn } = require("../../middlewares/auth");
const authRoute = express.Router()

authRoute.post("/login",login)
authRoute.post("/logout",isLoggedIn,logout)

module.exports = authRoute;