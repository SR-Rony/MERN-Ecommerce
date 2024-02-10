const route = require("express").Router()
const { getUser } = require("../../controller/user.controller")

route.get("/",getUser)

module.exports = route