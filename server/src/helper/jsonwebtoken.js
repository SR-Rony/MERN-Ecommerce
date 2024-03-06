const jwt = require('jsonwebtoken');

const createJsonWebToken = (paylod,secretKey,expiresIn) =>{
    const token = jwt.sign(paylod, secretKey,{expiresIn});
    return token
}

module.exports = {createJsonWebToken}