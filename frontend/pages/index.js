import React from 'react'
import PostCard from '../components/PostCard'
import PostForm from "../components/PostForm"

const dummy = {
  isLoggedIn: true,
  mainPosts: [{
    User: {
      id: 1,
      name: "Maison Margiella"
    },
    content: "It's my first post!",
    img: "https://www.maisonmargiela.com/assets/2017-01/_GAS0853_6.jpg",
    createdAt: "06-23-2019 23:11:15"
  }],
  imagePaths: []
}

const Home = () => {
  return (
    <>
      {dummy.isLoggedIn && <PostForm imagePaths={dummy.imagePaths} />}
      {dummy.mainPosts.map(post => {
        return (
          <PostCard key={post} data={post} />
        )
      })
      }
    </>
  )
}

export default Home
