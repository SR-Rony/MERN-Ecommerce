const route = require("express").Router()
const { getUsers, getSingleUser, deleteUser, register, userVerify, updateUser } = require("../../controller/user.controller")
const upload = require("../../middlewares/uplodFile")
const runValidation = require("../../middlewares/validators")
const { userRegistationValidate } = require("../../middlewares/validators/auth")

// user register route
route.post("/register",upload.single("image"),userRegistationValidate,runValidation , register)
// user verify route
route.post("/verify",userVerify)
// all get user
route.get("/",getUsers)
// single get user
route.get("/:id",getSingleUser)
// delete user
route.delete("/:id",deleteUser)
// update user
route.put("/update/:id",upload.single("image"),updateUser)

module.exports = route