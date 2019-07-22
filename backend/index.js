const express = require("express")
const db = require("./models")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const expressSession = require("express-session")
const dotenv = require("dotenv")

const userAPIRouter = require("./routes/user")
const postAPIRouter = require("./routes/post")
const postsAPIRouter = require("./routes/posts")

dotenv.config()
const app = express()
db.sequelize.sync()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false // for https
  }
}))

app.use("/api/user", userAPIRouter)
app.use("/api/post", postAPIRouter)
app.use("/api/posts", postsAPIRouter)

app.listen(8080, () => {
  console.log("server is running on localhost:8080")
})
