import React, { useCallback } from "react"
import Link from 'next/link'
import { Form, Input, Button } from "antd"
import { userInput } from "../pages/register"

const LoginForm = () => {
  const [userId, onChangeId] = userInput("")
  const [password, onChangePassword] = userInput("")
  const onSubmitForm = useCallback(event => {
    event.preventDefault()
    console.log({
      userId, password
    })
  }, [userId, password])

  return (
    <Form onSubmit={onSubmitForm}>
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