import React, { useState, useCallback } from "react"
import { Card, Icon, Button, Avatar, Input, List, Form, Comment } from "antd"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { ADD_COMMENT_REQUEST } from "../../reducers/post";

const PostCard = ({ data }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false)
  const [commentText, setCommentText] = useState("")
  const { myInfo } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev)
  }, [])

  const onSubmitComment = useCallback((event) => {
    event.preventDefault()
    if (!myInfo) {
      return alert("Please log in to make a comment")
    }
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: data.id
      }
    })
  }, [myInfo && myInfo.id])

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
          avatar={<Avatar>{data.User.name[0]}</Avatar>}
          title={data.User.name}
          description={data.content}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit">Comment</Button>
          </Form>
          <List
            header={`${data.comments ? data.comments.length : 0} comments`}
            itemLayout="horizontal"
            dataSource={data.comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.name}
                  avatar={<Avatar>{item.User.name[0]}</Avatar>}
                  content={item.content}
                  datetime={item.createdAt}
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
