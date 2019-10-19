const express = require("express")
const next = require("next")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const expressSession = require("express-session")
const dotenv = require("dotenv")

const dev = process.env.NODE_ENV !== "production"
const prod = process.env.NODE_ENV === "production"

const app = next({ dev })
const handle = app.getRequestHandler()

dotenv.config()

app.prepare().then(() => {
  const server = express()

  server.use(morgan("dev"))
  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))
  server.use(cookieParser(process.env.COOKIE_SECRET))
  server.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false
    }
  }))

  server.get("/hashtag/:tag", (request, response) => {
    return app.render(request, response, "/hashtag", { tag: request.params.tag })
  })

  server.get("/user/:id", (request, response) => {
    return app.render(request, response, "/user", { id: request.params.id })
  })

  server.get("*", (request, response) => {
    return handle(request, response)
  })

  server.listen(3060, (error) => {
    console.log('next+express running on port 3060')
  })
})