import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Menu, Input, Row, Col } from 'antd'
import LoginForm from "./LoginForm"
import ProfileFrom from "./ProfileForm"

const dummy = {
  name: "Maison Margiella",
  Post: [],
  Following: [],
  Follower: [],
  isLoggedIn: false
}

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ?
            <ProfileFrom data={dummy} />
            :
            <LoginForm />
          }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout