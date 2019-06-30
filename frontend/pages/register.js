import React, { useState, useCallback } from "react"
import { Form, Input, Checkbox, Button } from "antd"
import { signUpAction } from "../reducers/user";
import { useDispatch } from "react-redux"

// custom hook
export const userInput = (initialValue = null) => {
  const [value, setter] = useState(initialValue)
  const handler = useCallback(event => {
    setter(event.target.value)
  }, [])
  return [value, handler]
}

const Register = () => {
  const [repassword, setRepassword] = useState("")
  const [term, setTerm] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [termError, setTermError] = useState(false)

  const [id, onChangeID] = userInput("")
  const [name, onChangeName] = userInput("")
  const [password, onChangePassword] = userInput("")
  const dispatch = useDispatch()

  // useCallback to reduce unnecessary rendering 
  // when event handler functions are called
  const onSubmit = useCallback(event => {
    event.preventDefault()
    if (password !== repassword)
      return setPasswordError(true)
    if (!term)
      return setTermError(true)
    dispatch(signUpAction(
      {
        id,
        name,
        password
      }
    ))
  }, [password, repassword, term])

  const onChangeRepassword = useCallback(event => {
    setPasswordError(event.target.value !== password)
    setRepassword(event.target.value)
  }, [password])

  const onChangeTerm = useCallback(event => {
    setTermError(false)
    setTerm(event.target.checked)
  }, [])

  return (
    <>
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
    </>
  )
}

export default Register
