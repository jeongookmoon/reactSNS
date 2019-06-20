import React, { useState } from "react"
import Head from "next/head"
import Applayout from "../components/AppLayout"
import { Form, Input, Checkbox, Button } from "antd"

const Register = () => {
  const [repassword, setRepassword] = useState("")
  const [term, setTerm] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [termError, setTermError] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (password !== repassword)
      return setPasswordError(true)
    if (!term)
      return setTermError(true)
    console.log({
      id,
      name,
      password,
      repassword,
      term
    })
  };

  const onChangeRepassword = (event) => {
    setPasswordError(event.target.value !== password)
    setRepassword(event.target.value)
  };

  const onChangeTerm = (event) => {
    setTermError(false)
    setTerm(event.target.checked)
  };

  // custom hook
  const userInput = (initialValue = null) => {
    const [value, setter] = useState(initialValue)
    const handler = event => {
      setter(event.target.value)
    }
    return [value, handler]
  }

  const [id, onChangeID] = userInput("")
  const [name, onChangeName] = userInput("")
  const [password, onChangePassword] = userInput("")

  return (
    <>
      <Head>
        <title>React SNS - Register</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js" />
      </Head>
      <Applayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">ID</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeID} />
          </div>
          <div>
            <label htmlFor="user-name">Name</label>
            <br />
            <Input name="user-name" value={name} required onChange={onChangeName} />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-repassword">Repassword</label>
            <br />
            <Input name="user-repassword" type="password" value={repassword} required onChange={onChangeRepassword} />
            {passwordError && <div style={{ color: "red" }}>Please enter the same password</div>}
          </div>
          <div>
            <Checkbox name="agreement" value={term} onChange={onChangeTerm}>I read and agree with the term</Checkbox>
            {termError && <div style={{ color: "red" }}>You must agree with the term</div>}
          </div>
          <div>
            <Button type="primary" htmlType="submit">Register</Button>
          </div>
        </Form>
      </Applayout>
    </>
  )
}

export default Register
