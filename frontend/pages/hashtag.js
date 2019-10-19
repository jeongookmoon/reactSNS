import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { LOAD_HASHTAG_POSTS_REQUEST } from "../reducers/post"
import PostCard from "../components/Home/PostCard"

const Hashtag = ({ tag }) => {
  const dispatch = useDispatch()
  const { mainPosts } = useSelector(state => state.post)
  useEffect(() => {
    dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: tag,
    })
  }, [])

  return (
    <div>
      {mainPosts && mainPosts.map(content => {
        return (
          <PostCard key={content.createdAt.toString()} data={content} />
        )
      })}
    </div>
  )
}

Hashtag.propTypes = {
  tag: PropTypes.string.isRequired
}

Hashtag.getInitialProps = async (context) => {
  return { tag: context.query.tag }
}

export default Hashtag