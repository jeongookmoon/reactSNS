import React, { useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Menu, Input, Row, Col } from 'antd'
import LoginForm from "./Login/LoginForm"
import ProfileForm from "./Login/ProfileForm"
import { useSelector, useDispatch } from "react-redux"
import { LOAD_USER_REQUEST } from "../reducers/user"

const AppLayout = ({ children }) => {
  const { myInfo } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!myInfo) {
      dispatch({
        type: LOAD_USER_REQUEST
      })
    }
  }, [])
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row gutter={10} style={{ maxWidth: "100%" }}>
        <Col xs={23} md={6}>
          {myInfo ?
            <ProfileForm data={myInfo} />
            :
            <LoginForm />
          }
        </Col>
        <Col xs={23} md={12} style={{ marginTop: "1vh" }}>
          {children}
        </Col>

      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout