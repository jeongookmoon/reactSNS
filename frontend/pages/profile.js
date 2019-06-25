import React from "react"
import { Form, Input, Button } from "antd"
import FolloingsForm from "../components/Profile/FollowingsForm"
import FollowersForm from "../components/Profile/FollowersForm"

const Profile = () => {
  return (
    <div>
      <Form style={{ marginBottom: "20px", border: "1px solid #d9d9d9", padding: "20px" }}>
        <Input addonBefore="Name" />
        <Button type="primary">Edit</Button>
      </Form>
      <FolloingsForm />
      <FollowersForm />
    </div>
  )
}

export default Profile
