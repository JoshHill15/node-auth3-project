const cors = require("cors")
const morgan = require("morgan")
const helmet = require ("helmet")
const express = require("express")
const userRouter = require("./userRouter")


module.exports = server => {
    server.use(helmet())
    server.use(express.json())
    server.use(cors())
    server.use(morgan("tiny"))
    server.use("/api/users", userRouter)

}