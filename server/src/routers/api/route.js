const route = require("express").Router()
const authRoute = require("./auth.route")
const categoryRoute = require("./categoryRoute")
const seedRoute = require("./seed.route")
const userRoute = require("./user.route")

// user route
route.use("/users",userRoute)
// auth route
route.use("/auth",authRoute)
// seeduser route
route.use("/seeduser",seedRoute)
// category router
route.use("/category",categoryRoute)


module.exports = route