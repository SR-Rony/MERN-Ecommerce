const route = require("express").Router()
const { getUsers, getSingleUser, deleteUser } = require("../../controller/user.controller")

// all get user
route.get("/",getUsers)
// single get user
route.get("/:id",getSingleUser)
// delete user
route.delete("/:id",deleteUser)

module.exports = route