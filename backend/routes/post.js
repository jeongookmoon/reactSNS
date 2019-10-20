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

router.get(`/:id/comments`, async (request, response, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: request.params.id },
    })

    if (!post) {
      return response.status(404).send("The post does not exist")
    }

    const comments = await db.Comment.findAll({
      where: {
        PostId: request.params.id
      },
      order: [["createdAt", "ASC"]],
      include: [{
        model: db.User,
        attributes: ["id", "name"]
      }]
    })
    response.json(comments)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.post(`/:id/comment`, async (request, response, next) => {
  try {
    if (!request.user) {
      return response.status(401).send("Need to login")
    }
    const post = await db.Post.findOne({ where: { id: request.params.id } })
    if (!post) {
      return response.status(404).send("The post does not exist")
    }
    const newComment = await db.Comment.create({
      PostId: post.id,
      UserId: request.user.id,
      content: request.body.content
    })
    await post.addComment(newComment.id) // sequeralizer looks at "Associate" function and "As" and add 
    const comment = await db.Comment.findOne({
      where: {
        id: newComment.id
      },
      include: [{
        model: db.User,
        attributes: ["id", "name"]
      }]
    })
    return response.json(comment)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
