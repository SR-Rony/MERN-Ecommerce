const route = require("express").Router()
const { getUsers, getSingleUser } = require("../../controller/user.controller")

// all get user
route.get("/",getUsers)
// single get user
route.get("/:id",getSingleUser)

module.exports = route