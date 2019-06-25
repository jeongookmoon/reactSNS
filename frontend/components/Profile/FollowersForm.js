import React from "react"
import { List, Card, Avatar, Button } from "antd"

const FollowersForm = () => {
  return (
    <List
      style={{ marginBottom: "20px" }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>Follower List</div>}
      loadMore={<Button style={{ width: "100%" }}>Load More</Button>}
      bordered
      dataSource={["Luca", "Penny", "Jamie", "Karen", "Xavier"]}
      renderItem={item => (
        <List.Item style={{ marginTop: "20px" }}>
          <Card>
            <Card.Meta
              avatar={<Avatar>{item}</Avatar>}
              key={item}
              title={item}
              description={<Button>Profile</Button>}
            />
          </Card>
        </List.Item>
      )}
    />
  )
}

export default FollowersForm
