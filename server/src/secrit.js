require("dotenv").config();
const PORT =process.env.PORT || 3002;
const mongosseUrl = process.env.MONGODB_URL;

module.exports = {PORT,mongosseUrl}