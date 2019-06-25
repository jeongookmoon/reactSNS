import React from "react"
import { Card, Icon, Button, Avatar } from "antd"
import PropTypes from "prop-types"

const PostCard = ({ data }) => {
  return (
    <Card
      key={data.createdAt}
      cover={data.img && <img alt="example" src={data.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>Follow</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{data.User.name[0]}</Avatar>}
        title={data.User.name}
        description={data.content}
      />
    </Card>
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
