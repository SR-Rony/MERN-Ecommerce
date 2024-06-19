const route = require("express").Router()
const { getUsers, getSingleUser, deleteUser, register, userVerify, updateUser, bannedUser, handleManageUser, handleUpdatePassword, handleForgatePassword, handleResetPassword } = require("../../controller/user.controller")
const upload = require("../../middlewares/uplodFile")
const runValidation = require("../../middlewares/validators")
const { userRegistationValidate, updatePasswordValidate, userForgatePassword, userResetPassword } = require("../../middlewares/validators/auth")
const {isLoggedIn, isLoggedOut, isAdmin} = require("../../middlewares/auth")

// user register route
route.post("/register",isLoggedOut,upload.single("image"),userRegistationValidate,runValidation , register)
// user verify route
route.post("/verify",isLoggedOut,userVerify)
// all get user
route.get("/",isLoggedIn,isAdmin,getUsers)
// single get user
route.get("/:id([0-9a-fA-F]{24})",isLoggedIn,getSingleUser)
// delete user
route.delete("/:id([0-9a-fA-F]{24})",isLoggedIn,deleteUser)
// update user
route.put("/update/:id([0-9a-fA-F]{24})",upload.single("image"),isLoggedIn,updateUser)
// user new password set
route.put("/update-password/:id([0-9a-fA-F]{24})",isLoggedIn,updatePasswordValidate,handleUpdatePassword)
// user forget password set
route.post("/forget-password",isLoggedIn,userForgatePassword,runValidation, handleForgatePassword)
// user reset password
route.put("/reset-password",isLoggedIn,userResetPassword,runValidation, handleResetPassword)
// handle manage user
route.put("/manage-user/:id([0-9a-fA-F]{24})",isLoggedIn,isAdmin,handleManageUser)

module.exports = route