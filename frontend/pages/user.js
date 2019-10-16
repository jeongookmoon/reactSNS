import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { LOAD_USER_POSTS_REQUEST } from "../reducers/post"
import PostCard from "../components/Home/PostCard"
import { Avatar, Card } from "antd"
import { LOAD_USER_REQUEST } from "../reducers/user"

const User = ({ id }) => {
  const dispatch = useDispatch()
  const { mainPosts } = useSelector(state => state.post)
  const { userInfo } = useSelector(state => state.user)

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
      data: id
    })
    dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: id
    })
  }, [])

  return (
    <div>
      {userInfo ?
        (<Card
          actions={[
            <div key="posts">Posts<br />{userInfo.posts}</div>,
            <div key="following">Following<br />{userInfo.Followings}</div>,
            <div key="follower">Follower<br />{userInfo.Followers}</div>
          ]}>
          <Card.Meta
            avatar={<Avatar>{userInfo.name[0]}</Avatar>}
            title={userInfo.name}
          />
        </Card>) : null}
      {mainPosts.map(content => (
        <PostCard key={content.createdAt.toString()} post={content} />
      ))}
    </div>
  )
}

User.propTypes = {
  id: PropTypes.number.isRequired
}

User.getInitialProps = async (context) => {
  User.log("user getInitialProps", context.query.id)
  return { id: parseInt(context.query.id, 10) }
}

export default User