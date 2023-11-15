require('dotenv').config()

const app = require("./app.js")
const cors = require('cors')
const port = process.env.PORT

// Enable CORS
app.use(cors({
  origin: 'http://localhost:8000'
}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})