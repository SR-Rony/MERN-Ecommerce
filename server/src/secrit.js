require("dotenv").config()
const mongosseUrl = process.env.MONGODB_URL;
const serverPort = process.env.SERVER_PORT || 8000;
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || "iamsrrony707@1w23eqreafdv";
// const defaulUserImg = process.env.DEFAULT_USER_IMG || "public/images/user/defaul_user.png"
const defaulUserImg ="public/images/user/defaul_user.png"


module.exports = {mongosseUrl,serverPort,defaulUserImg,jwtActivationKey}