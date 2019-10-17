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
  const { userInfo, myInfo } = useSelector(state => state.user)

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
      data: id
    });
    dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: id
    });
  }, [mainPosts, userInfo, myInfo])

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
      {console.log('mainPosts', mainPosts)}

    </div>
  )
}

User.propTypes = {
  id: PropTypes.number.isRequired
}

User.getInitialProps = async (context) => {
  console.log("user getInitialProps", parseInt(context.query.tag, 10))
  return { id: parseInt(context.query.tag, 10) }
}

export default User