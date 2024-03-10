require("dotenv").config()
const mongosseUrl = process.env.MONGODB_URL;
const serverPort = process.env.SERVER_PORT || 8000;
const dbName=process.env.DB_NAME
const dbPassword=process.env.DB_PASSWORD
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || "iamsrrony707@1w23eqreafdv";
const smtpUserName= process.env.SMTP_USERNAME
const smtpPassword= process.env.SMTP_PASSWORD
// const defaulUserImg = process.env.DEFAULT_USER_IMG || "public/images/user/defaul_user.png"
const defaulUserImg ="public/images/user/defaul_user.png"
const clientUrl =process.env.CLIENT_URL
const uplodDir=process.env.UPLOD_FILE||"public/images/user"



module.exports = {mongosseUrl,serverPort,defaulUserImg,jwtActivationKey,smtpUserName,smtpPassword,clientUrl,dbName,dbPassword,uplodDir}