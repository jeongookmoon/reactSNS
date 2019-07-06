import React, { useCallback } from "react"
import Link from 'next/link'
import { Form, Input, Button } from "antd"
import { userInput } from "../../pages/register"
import { useDispatch, useSelector } from "react-redux"
import { LOG_IN_REQUEST } from "../../reducers/user"

const LoginForm = () => {
  const [userId, onChangeId] = userInput("")
  const [password, onChangePassword] = userInput("")
  const { isLoggingIn } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const onSubmitForm = useCallback(event => {
    event.preventDefault()
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId, password
      }
    })
  }, [userId, password])

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={userId} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>Login</Button>
        <Link href="/register"><a><Button>Register</Button></a></Link>
      </div>
    </Form>
  )
}

export default LoginForm
