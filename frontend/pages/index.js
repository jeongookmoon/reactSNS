import React, { useEffect } from "react"
import PostCard from '../components/Home/PostCard'
import PostForm from "../components/Home/PostForm"
import { useSelector, useDispatch } from "react-redux"
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post"

const Home = () => {
  // access to state using useSelector hooks
  const { myInfo } = useSelector(state => state.user)
  const { mainPosts, imagePaths } = useSelector(state => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST
    })
  }, [])

  return (
    <div>
      {myInfo ? <div>{myInfo.name} logged in!</div> : <div></div>}
      {myInfo && <PostForm data={imagePaths} />}
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
