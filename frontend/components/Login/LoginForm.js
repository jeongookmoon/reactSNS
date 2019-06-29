import React, { useCallback } from "react"
import Link from 'next/link'
import { Form, Input, Button } from "antd"
import { userInput } from "../../pages/register"
import { useDispatch } from "react-redux"
import { loginAction } from "../../reducers/user"

const LoginForm = () => {
  const [userId, onChangeId] = userInput("")
  const [password, onChangePassword] = userInput("")
  const dispatch = useDispatch()

  const onSubmitForm = useCallback(event => {
    event.preventDefault()
    dispatch(loginAction)
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
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        <Link href="/register"><a><Button>Register</Button></a></Link>
      </div>
    </Form>
  )
}

export default LoginForm
