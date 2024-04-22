const express = require("express");
const { login } = require("../../controller/authController");
const authRoute = express.Router()

authRoute.post("/login",login)

module.exports = authRoute;