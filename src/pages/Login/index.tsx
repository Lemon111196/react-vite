// import React from 'react'
import { useState } from "react"
import { LoginCointainer } from "./style"

export default function Login() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })

  const onChange = (e: any) => {
    setName({
      ...name,
      [e.target.value]: e.target.value
    })
  }

  return (
    <LoginCointainer>
      <p>First name</p>
      <input name="firstName" onChange={onChange} value={name.firstName} type="text"/>
      <p>Last name</p>
      <input name="lastName" onChange={onChange} value={name.lastName} type="text"/>
      <button>Log in</button>
    </LoginCointainer>
  )
}
