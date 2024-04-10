const {body} = require("express-validator")

//user registation validation
const userRegistationValidate = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("name is require")
    .isLength({min:3, max:30})
    .withMessage("name shoud be at least 3-30 characters long"),
    // email validation
    body("email")
    .trim()
    .notEmpty()
    .withMessage("email is require")
    .isEmail()
    .withMessage("Invalid Email"),
    // password validation
    body("password")
    .trim()
    .notEmpty()
    .withMessage("password is require")
    .isLength({min:6})
    .withMessage("password shoud be at least 6 characters long"),
    // addres validation
    body("address")
    .trim()
    .notEmpty()
    .withMessage("address is require")
    .isLength({min:3})
    .withMessage("address shoud be at least 3 characters long"),
    // phone validation
    body("phone")
    .trim()
    .notEmpty()
    .withMessage("phone is require"),
    // 
    body("images")
    .optional()
    .isString()
    .withMessage("images is require")

]

module.exports ={
    userRegistationValidate
}
