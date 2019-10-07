const express = require("express")
const db = require("../models")
const router = express.Router()

router.get("/", async (request, respose, next) => {
  try {
    const posts = await db.Post.findAll({
      include: [{
        model: db.User,
        attributes: ["id", "name"]
      }],
      order: [["createdAt", "DESC"]]
    })
    respose.json(posts)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
