const express = require("express")
const bcrypt = require("bcrypt")
const passport = require("passport")
const db = require("../models")
const router = express.Router()

router.get("/", async (request, response, next) => {
  if (!request.user) {
    return response.status(401).send("Need to login")
  }
  try {
    const fullUser = await db.User.findOne({
      where: { id: request.user.id },
      include: [{
        model: db.Post,
        as: "Posts",
        attributes: ["id"]
      }, {
        model: db.User,
        as: "Followings",
        attributes: ["id"]
      }, {
        model: db.User,
        as: "Followers",
        attributes: ["id"]
      }],
      attributes: ['id', 'name', 'userId']
    })
    return response.json(fullUser)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.post("/", async (request, response, next) => {
  try {
    const existingUser = await db.User.findOne({
      where: {
        userId: request.body.userId
      }
    })
    if (existingUser) {
      return response.status(403).send("User ID already exists")
    }
    const hashedPassword = await bcrypt.hash(request.body.password, 12)
    const newUser = await db.User.create({
      name: request.body.name,
      userId: request.body.userId,
      password: hashedPassword
    })
    return response.status(200).json(newUser)
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

router.get("/:id/posts", async (request, response, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(request.params.id, 10) },
      include: [{
        model: db.Post,
        as: "Posts",
        attributes: ["id"]
      }, {
        model: db.User,
        as: "Followings",
        attributes: ["id"],
      }, {
        model: db.User,
        as: "Followers",
        attributes: ["id"]
      }],
      attributes: ["id", "name"]
    })
    const jsonUser = user.toJson()
    jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0
    jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0
    jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0
    return response.json(jsonUser)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.post("/login", (request, response, next) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) {
      console.error(error);
      return next(error);
    }
    if (info) {
      return response.status(401).send(info.reason);
    }
    return request.login(user, async (loginError) => {
      try {
        if (loginError) {
          return next(loginError)
        }
        const fullUser = await db.User.findOne({
          where: { id: user.id },
          include: [{
            model: db.Post,
            as: "Posts",
            attributes: ["id"]
          }, {
            model: db.User,
            as: "Followings",
            attributes: ["id"]
          }, {
            model: db.User,
            as: "Followers",
            attributes: ["id"]
          }],
          attributes: ['id', 'name', 'userId']
        })
        return response.json(fullUser)
      } catch (error) {
        next(error)
      }
    })
  })(request, response, next)
})

router.post("/logout", (request, response) => {
  request.logout()
  request.session.destroy()
  response.send("Logout complete")
})

router.get("/:id/follow", (request, response) => {

})

router.post("/:id/follow", (request, response) => {

})

router.delete("/:id/follow", (request, response) => {

})

router.delete("/:id/follower", (request, response) => {

})

router.get("/:id/posts", async (request, response, next) => {
  try {
    const posts = await db.Post.findAll({
      where: {
        UserId: parseInt(request.params.id, 10),
        RetweetId: null
      },
      include: [{
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
