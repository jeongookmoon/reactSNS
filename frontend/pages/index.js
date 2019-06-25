import React from 'react'
import PostCard from '../components/Home/PostCard'
import PostForm from "../components/Home/PostForm"

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
