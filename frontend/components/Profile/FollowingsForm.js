import React from "react"
import { List, Card, Button, Icon, Avatar } from "antd"

const FollowingForm = () => {
  return (
    <List
      style={{ marginBottom: "20px" }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>Following List</div>}
      loadMore={<Button style={{ width: "100%" }}>Load More</Button>}
      bordered
      dataSource={["Jamie", "Karen", "Xavier"]}
      renderItem={item => (
        <List.Item style={{ marginTop: "20px" }}>
          <Card extra={[<Button><Icon key="stop" type="stop" />Unfollow</Button>]}>
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

export default FollowingForm
