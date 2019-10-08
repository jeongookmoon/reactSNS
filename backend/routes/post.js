const express = require("express")
const db = require("../models")
const router = express.Router()

router.post("/", async (request, respose, next) => {
  try {
    const hashtags = request.body.content.match(/#[^\s]+/g)
    const newPost = await db.Post.create({
      content: request.body.content, // ex) 'Time to reorder #check #bank'
      UserId: request.user.id,
    })
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(tag =>
          db.Hashtag.findOrCreate({
            where: {
              name: tag.slice(1).toLowerCase()
            },
          })))
      await newPost.addHashtags(result.map(filteredResult => filteredResult[0]))
    }
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User
      }]
    })
    respose.json(fullPost)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.post("/images", (request, respose) => {

})

module.exports = router
