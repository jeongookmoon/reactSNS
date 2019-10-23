import React, { useCallback, useState, useEffect, useRef } from "react"
import { Form, Input, Button } from "antd"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from "../../reducers/post";

const PostForm = ({ data }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState()
  const { isAddingPost, postAdded } = useSelector(state => state.post)
  const imageRef = useRef()

  useEffect(() => {
    setText("")
  }, [postAdded === true])

  const onSubmitForm = useCallback((event) => {
    event.preventDefault()
    if (!text || !text.trim()) {
      return alert("Please write content")
    }
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        content: text
      }
    })
  }, [text])

  const onChangeText = useCallback((event) => {
    setText(event.target.value)
  }, [])

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onChangeImage = useCallback((event) => {
    console.log(event.target.files)
    const imageFormData = new FormData()
    [].forEach.call(event.target.files, (file) => {
      imageFormData.append("image", file)
    })
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData
    })
  }, [])

  return (
    <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
      <Input.TextArea maxLength={140} placeholder="What's new?" value={text} onChange={onChangeText} />
      <div style={{ marginBottom: 20 }}>
        <input type="file" multiple hidden ref={imageInput} onChange={onChangeImage} />
        <Button onClick={onClickImageUpload}>Image Upload</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit" loading={isAddingPost}>Post</Button>
      </div>
      <div>
        {data.map((imagePath) => {
          <div key={imagePath} style={{ display: "inline-block" }}>
            <img src={`http://localhost:3000/${imagePath}`} style={{ width: "200px" }} alt={imagePath} />
            <div>
              <Button>Remove</Button>
            </div>
          </div>
        })}
      </div>
    </Form>
  )
}

PostForm.propTypes = {
  data: PropTypes.array
}

export default PostForm
