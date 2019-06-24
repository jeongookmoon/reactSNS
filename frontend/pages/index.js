import React from 'react'
import { Form, Input, Button, Card, Icon, Avatar } from 'antd';

const dummy = {
  isLoggedIn: true,
  mainPosts: [{
    User: {
      id: 1,
      name: "Maison Margiella"
    },
    content: "It's my first post!",
    img: "https://www.maisonmargiela.com/assets/2017-01/_GAS0853_6.jpg",
    createdAt: "06-23-2019 23:11:15"
  }],
  imagePaths: []
}

const Home = () => {
  return (
    <>
      {dummy.isLoggedIn && <Form encType="multipart/form-data">
        <Input.TextArea maxLength={140} placeholder="What's new?" />
        <div style={{ marginBottom: 20 }}>
          <input type="file" multiple hidden />
          <Button>Image Upload</Button>
          <Button type="primary" style={{ float: "right" }} htmlType="submit">Post</Button>
        </div>
        <div>
          {dummy.imagePaths.map((value, index) => {
            return (
              <div key={value} style={{ display: "inline-block" }}>
                <img src={"http://localhost:3000/" + value} style={{ width: "200px" }} alt={value} />
                <div>
                  <Button>Remove</Button>
                </div>
              </div>
            )
          })}
        </div>
        {dummy.mainPosts.map(post => {
          return (
            <Card
              key={post.createdAt}
              cover={post.img && <img alt="example" src={post.img} />}
              actions={[
                <Icon type="retweet" key="retweet" />,
                <Icon type="heart" key="heart" />,
                <Icon type="message" key="message" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
              extra={<Button>Follow</Button>}>
              <Card.Meta
                avatar={<Avatar>{post.User.name[0]}</Avatar>}
                title={post.User.name}
                description={post.content}
              />
            </Card>
          )
        })}
      </Form>}
    </>
  )
}

export default Home
