import React from "react"
import { Form, Input, Button } from "antd"
import PropTypes from "prop-types"

const PostForm = ({ imagePaths }) => {
  return (
    <Form encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="What's new?" />
      <div style={{ marginBottom: 20 }}>
        <input type="file" multiple hidden />
        <Button>Image Upload</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">Post</Button>
      </div>
      <div>
        {imagePaths.map((value, index) => {
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
    </Form>
  )
}

PostForm.propTypes = {
  imagePaths: PropTypes.array
}

export default PostForm
