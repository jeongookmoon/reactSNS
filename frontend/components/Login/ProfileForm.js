import React, { useCallback } from "react"
import { Card, Avatar, Button } from "antd"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { logoutRequestAction } from "../../reducers/user";

const ProfileForm = ({ data }) => {
  const dispatch = useDispatch()
  // have to use usecallback since passing logout function
  // to Button child
  const logout = useCallback(() => {
    dispatch(logoutRequestAction)
  }, [])

  return (
    <Card
      actions={[
        <div key="posts">Posts<br />{data.Posts.length}</div>,
        <div key="following">Following<br />{data.Followings.length}</div>,
        <div key="follower">Followers<br />{data.Followers.length}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{data.name[0]}</Avatar>}
        title={data.name}
      />
      <Button onClick={logout}>Logout</Button>
    </Card>
  )
}

ProfileForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    Post: PropTypes.array,
    Following: PropTypes.array,
    Follower: PropTypes.array,
    isLoggedIn: PropTypes.bool,
  })
}

export default ProfileForm
