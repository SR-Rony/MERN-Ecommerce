const route = require("express").Router()
const apiRoute = require("./api/route")

// common api url
const baseUrl = "/api/v1"
// localhost:400/api/v1
route.use(baseUrl,apiRoute)

module.exports = route