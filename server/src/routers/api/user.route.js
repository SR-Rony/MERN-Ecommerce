const route = require("express").Router()
const { handleManageUser, handleUpdatePassword, handleForgatePassword, handleResetPassword, handleRegister, handleUserVerify, handleGetUsers, handleGetSingleUser, handleDeleteUser, handleUpdateUser } = require("../../controller/user.controller")
const runValidation = require("../../middlewares/validators")
const { userRegistationValidate, updatePasswordValidate, userForgatePassword, userResetPassword } = require("../../middlewares/validators/auth")
const {isLoggedIn, isLoggedOut, isAdmin} = require("../../middlewares/auth")
const { uploadUserImage } = require("../../middlewares/uplodFile")

// user register route: localhost:400/api/v1/users/register
route.post("/register",isLoggedOut,uploadUserImage.single("image"), handleRegister)

// user verify route: localhost:400/api/v1/users/verify
route.post("/verify",isLoggedOut,handleUserVerify)

// all get user: localhost:400/api/v1/users/
route.get("/",isLoggedIn,isAdmin,handleGetUsers)

// single get user: localhost:400/api/v1/users/:id
route.get("/:id([0-9a-fA-F]{24})",isLoggedIn,handleGetSingleUser)

// delete user: localhost:400/api/v1/users/:id
route.delete("/:id([0-9a-fA-F]{24})",isLoggedIn,handleDeleteUser)

// update user:  localhost:400/api/v1/users/update/:id
route.put("/update/:id([0-9a-fA-F]{24})",uploadUserImage.single("image"),isLoggedIn,handleUpdateUser)

// user new password set: localhost:400/api/v1/users/update-password
route.put("/update-password/:id([0-9a-fA-F]{24})",isLoggedIn,updatePasswordValidate,handleUpdatePassword)

// user forget password set: localhost:400/api/v1/users/forget-password
route.post("/forget-password",isLoggedOut,userForgatePassword,runValidation, handleForgatePassword)

// user reset password :localhost:400/api/v1/users/reset-password
route.put("/reset-password",isLoggedOut,userResetPassword,runValidation, handleResetPassword)

// handle manage user: localhost:400/api/v1/users/manage-user
route.put("/manage-user/:id([0-9a-fA-F]{24})",isLoggedIn,isAdmin,handleManageUser)

module.exports = route