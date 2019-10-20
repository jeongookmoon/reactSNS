import React, { useState, useCallback, useEffect } from "react"
import { Card, Icon, Button, Avatar, Input, List, Form, Comment } from "antd"
import Link from "next/link"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST } from "../../reducers/post"

const PostCard = ({ data }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false)
  const [commentText, setCommentText] = useState("")
  const { myInfo } = useSelector(state => state.user)
  const { commentAdded, isAddingComment } = useSelector(state => state.post)
  const dispatch = useDispatch()
  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev)
    if (!commentFormOpened) {
      dispatch({
        type: LOAD_COMMENTS_REQUEST,
        data: data.id
      })
    }
  }, [])

  const onSubmitComment = useCallback((event) => {
    event.preventDefault()
    if (!myInfo) {
      return alert("Please log in to make a comment")
    }
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: data.id,
        content: commentText
      }
    })
  }, [myInfo && myInfo.id, commentText])

  useEffect(() => {
    setCommentText("")
  }, [commentAdded === true])

  const onChangeCommentText = useCallback((event) => {
    setCommentText(event.target.value)
  }, [])

  return (
    <div>
      <Card
        key={data.createdAt}
        cover={data.img && <img alt="example" src={data.img} />}
        actions={[
          <Icon type="retweet" key="retweet" />,
          <Icon type="heart" key="heart" />,
          <Icon type="message" key="message" onClick={onToggleComment} />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
        extra={<Button>Follow</Button>}
        style={{ marginBottom: "3.5vh" }}
      >
        <Card.Meta
          avatar={<Link href={{ pathname: "/user", query: { id: data.User.id } }} as={`/user/${data.User.id}`}><a><Avatar>{data.User.name[0]}</Avatar></a></Link>}
          title={data.User.name}
          description={(
            <div>{data.content.split(/(#[^\s]+)/g).map(word => {
              if (word.match(/#[^\s]+/)) {
                return (
                  <Link href={{ pathname: "/hashtag", query: { tag: word.slice(1) } }} as={`/hashtag/${word.slice(1)}`} key={word}><a>{word}</a></Link>
                )
              }
              return word
            })}
            </div>
          )}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>Comment</Button>
          </Form>
          <List
            header={`${data.Comments ? data.Comments.length : 0} comments`}
            itemLayout="horizontal"
            dataSource={data.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.name}
                  avatar={<Link href={{ pathname: "/user", query: { id: item.User.id } }} as={`/user/${item.User.id}`}><a><Avatar>{item.User.name}</Avatar></a></Link>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  )
}

PostCard.propTypes = {
  data: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.string,
  })
}

export default PostCard
