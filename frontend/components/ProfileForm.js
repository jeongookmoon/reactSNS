import React from "react"
import { Card, Avatar } from "antd"
import PropTypes from "prop-types"

const ProfileForm = ({ data }) => {
  return (
    <Card
      actions={[
        <div key="like">Like<br />{data.Post.length}</div>,
        <div key="following">Following<br />{data.Following.length}</div>,
        <div key="follower">Followers<br />{data.Follower.length}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{data.name[0]}</Avatar>}
        title={data.name}
      />
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