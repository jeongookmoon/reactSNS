import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

const Profile = () => {
  return (
    <>
      <Head>
        <title>React SNS - Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js" />
      </Head>
      <AppLayout>
        <div>This is profile page for user</div>
      </AppLayout>
    </>
  )
}

export default Profile
