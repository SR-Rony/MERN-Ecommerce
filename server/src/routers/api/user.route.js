const route = require("express").Router()
const { getUsers, getSingleUser, deleteUser, register } = require("../../controller/user.controller")

// user register route
route.post("/register",register)
// all get user
route.get("/",getUsers)
// single get user
route.get("/:id",getSingleUser)
// delete user
route.delete("/:id",deleteUser)

module.exports = route