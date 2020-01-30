const express = require("express")
const server = express()
const configureMiddleware = require("./middleware")

configureMiddleware(server)

server.get("/", (req,res) => {
    res.json("hii")
})


module.exports = server