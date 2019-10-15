const express = require("express")
const db = require("../models")

const router = express.Router()

router.get("/:tag", async (request, response, next) => {
  try {
    const posts = await db.Post.findAll({
      include: [{
        model: db.Hashtag,
        where: { name: decodeURIComponent(request.params.tag) }
      }, {
        model: db.User,
        attributes: ["id", "name"]
      }]
    })
    response.json(posts)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router