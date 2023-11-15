const express = require('express')
const path = require('path')
const router = require("./app/routes/index.js")
const app = express()

app.use(express.json())

// - Routes
app.use("/api", router)

// - Static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// - Database
const db = require("./app/models/index.js")
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected ..."))
  .catch((err) => console.log(err))

module.exports = app