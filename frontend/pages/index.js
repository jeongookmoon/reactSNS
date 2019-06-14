import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div><Link href="/another"><a>another</a></Link></div>
      <div><Link href="/user/create"><a>create</a></Link></div>
      <div>Hello! This is index (Main page)</div>
    </>
  )
}

export default Home
