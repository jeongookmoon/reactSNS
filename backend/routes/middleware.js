exports.isLoggedIn = (request, response, next) => {
  if (request.isAuthenticated()) {
    next()
  } else {
    response.status(401).send("Need to login")
  }
}

exports.isNotLoggedIn = (request, response, next) => {
  if (!request.isAuthenticated()) {
    next()
  } else {
    response.status(401).send("Can not access if you are already logged in")
  }
}