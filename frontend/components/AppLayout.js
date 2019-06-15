import React from 'react'
import Link from 'next/link'
import { Menu, Input, Button } from 'antd'

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item key="register">
          <Link href="/register"><a><Button>Register</Button></a></Link>
        </Menu.Item>
      </Menu>

      {children}
    </div>
  )
}

export default AppLayout