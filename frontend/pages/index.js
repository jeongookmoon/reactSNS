import React from "react"
import PostCard from '../components/Home/PostCard'
import PostForm from "../components/Home/PostForm"
import { useSelector } from "react-redux"

const Home = () => {
  // access to state using useSelector hooks
  const { user, isLoggedIn } = useSelector(state => state.user)
  const { mainPosts, imagePaths } = useSelector(state => state.post)

  return (
    <div>
      {user ? <div>{user.name} logged in!</div> : <div>Logged Out</div>}
      {isLoggedIn && <PostForm data={imagePaths} />}
      {mainPosts.map(post => {
        return (
          <PostCard key={post.User.id} data={post} />
        )
      })
      }
    </div>
  )
}

export default Home
