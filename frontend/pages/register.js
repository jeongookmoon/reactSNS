import React from 'react'
import Head from 'next/head'
import Applayout from '../components/AppLayout'

const Register = () => {
  return (
    <>
      <Head>
        <title>React SNS - Register</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js" />
      </Head>
      <Applayout>
        <div>This is register page</div>
      </Applayout>
    </>
  )
}

export default Register
