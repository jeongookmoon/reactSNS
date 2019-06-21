import React from "react"
import Head from "next/head"
import AppLayout from "../components/AppLayout"

// using Next's component as prop, use other page as a child
const ReactSNS = ({ Component }) => {
  return (
    <>
      <Head>
        <title>React SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js" />
      </Head>
      <AppLayout >
        <Component />
      </AppLayout>
    </>
  )
}

export default ReactSNS
