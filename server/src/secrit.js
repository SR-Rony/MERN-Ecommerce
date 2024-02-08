require("dotenv").config();
const mongosseUrl = process.env.MONGODB_URL;
const serverPort = process.env.SERVER_PORT;
const defaulUserImg = process.env.DEFAULT_USER_IMG || "public/images/user/defaul_user.png"

module.exports = {mongosseUrl,serverPort,defaulUserImg}