import React from "react"
import { Card, Avatar } from "antd"

const ProfileForm = (props) => {
  const { data } = props
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


export default ProfileForm