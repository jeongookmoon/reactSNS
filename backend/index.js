const express = require("express")

const app = express()

app.get("/", (request, response) => {
  response.send("Hello, server")
})

app.listen(8080, () => {
  console.log("server is running on localhost:8080")
})