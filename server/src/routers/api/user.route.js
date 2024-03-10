const route = require("express").Router()
const { getUsers, getSingleUser, deleteUser, register, userVerify } = require("../../controller/user.controller")
const upload = require("../../middlewares/uplodFile")

// user register route
route.post("/register",upload.single("image"), register)
// user verify route
route.post("/verify",userVerify)
// all get user
route.get("/",getUsers)
// single get user
route.get("/:id",getSingleUser)
// delete user
route.delete("/:id",deleteUser)

module.exports = route