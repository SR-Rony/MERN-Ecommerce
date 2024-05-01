const route = require("express").Router()
const { getUsers, getSingleUser, deleteUser, register, userVerify, updateUser, bannedUser, handleManageUser, handleUpdatePassword } = require("../../controller/user.controller")
const upload = require("../../middlewares/uplodFile")
const runValidation = require("../../middlewares/validators")
const { userRegistationValidate, updatePasswordValidate } = require("../../middlewares/validators/auth")
const {isLoggedIn, isLoggedOut, isAdmin} = require("../../middlewares/auth")

// user register route
route.post("/register",isLoggedOut,upload.single("image"),userRegistationValidate,runValidation , register)
// user verify route
route.post("/verify",isLoggedOut,userVerify)
// all get user
route.get("/",isLoggedIn,isAdmin,getUsers)
// single get user
route.get("/:id",isLoggedIn,getSingleUser)
// delete user
route.delete("/:id",isLoggedIn,deleteUser)
// update user
route.put("/update/:id",upload.single("image"),isLoggedIn,updateUser)
// user new password set
route.put("/update-password/:id",isLoggedIn,updatePasswordValidate,handleUpdatePassword)
// handle manage user
route.put("/manage-user/:id",isLoggedIn,isAdmin,handleManageUser)

module.exports = route