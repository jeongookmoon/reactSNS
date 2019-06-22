import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Menu, Input, Button, Row, Col, Card, Avatar } from 'antd'

const dummy = {
  name: "Maison Margiella",
  Post: [],
  Following: [],
  Follower: []
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
        <Menu.Item key="register">
          <Link href="/register"><a><Button>Register</Button></a></Link>
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          <Card
            actions={[
              <div key="like">Like<br />{dummy.Post.length}</div>,
              <div key="following">Following<br />{dummy.Following.length}</div>,
              <div key="follower">Followers<br />{dummy.Follower.length}</div>
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{dummy.name[0]}</Avatar>}
              title={dummy.name}
            />
          </Card>
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