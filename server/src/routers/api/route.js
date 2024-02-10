const route = require("express").Router()
const seedRoute = require("./seed.route")
const userRoute = require("./user.route")

route.use("/users",userRoute)
route.use("/seeduser",seedRoute)


module.exports = route