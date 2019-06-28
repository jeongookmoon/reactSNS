import React, { useEffect } from 'react'
import PostCard from '../components/Home/PostCard'
import PostForm from "../components/Home/PostForm"
import { useDispatch, useSelector } from "react-redux"
import { LOG_IN, LOG_OUT, loginAction, logoutAction } from "../reducers/user"

const dummy = {
  isLoggedIn: true,
  mainPosts: [
    {
      User: {
        id: 1,
        name: "Maison Margiella"
      },
      content: "It's my first post!",
      img: "https://www.maisonmargiela.com/assets/2017-01/_GAS0853_6.jpg",
      createdAt: "06-23-2019 23:11:15"
    },
    {
      User: {
        id: 2,
        name: "Artist Panya"
      },
      content: "My first picture!",
      img: "https://www.armani.com/cloud/armanif31wp/uploads/2018/06/Men_Fashion_Show_Spring_Summer_2019_Giorgio_Armani_VideoBTS.jpg",
      createdAt: "06-23-2019 23:11:15"
    }
  ],
  imagePaths: []
}

const Home = () => {
  const dispatch = useDispatch()
  // access to state using useSelector hooks
  const { isLoggedIn, user } = useSelector(state => state.user)
  // like ComponentDidMount
  useEffect(() => {
    dispatch({
      type: LOG_IN,
      data: {
        name: "Maison Margiella"
      }
    })
    dispatch(logoutAction)
    dispatch(loginAction)
  }, [])
  return (
    <div>
      {user ? <div>{user.name} logged in!</div> : <div>Logged Out</div>}
      {dummy.isLoggedIn && <PostForm imagePaths={dummy.imagePaths} />}
      {dummy.mainPosts.map(post => {
        return (
          <PostCard key={post} data={post} />
        )
      })
      }
    </div>
  )
}

export default Home
