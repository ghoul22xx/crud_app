const express = require('express')
const router = express()
const userRoutes = require('./user.js')


router.use("/users", userRoutes)


module.exports = router