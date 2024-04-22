const route = require("express").Router()
const authRoute = require("./auth.route")
const seedRoute = require("./seed.route")
const userRoute = require("./user.route")

// user route
route.use("/users",userRoute)
// auth route
route.use("/auth",authRoute)
// seeduser route
route.use("/seeduser",seedRoute)


module.exports = route