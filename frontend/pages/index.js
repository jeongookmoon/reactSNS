import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

const Home = () => {
  return (
    <>
      <Head>
        <title>React SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js" />
      </Head>
      <AppLayout >
        <div>Hello! This is index (Main page)</div>
      </AppLayout>
    </>
  )
}

export default Home
