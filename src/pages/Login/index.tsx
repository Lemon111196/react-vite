// import React from 'react'
import { useState } from "react"
import { LoginCointainer } from "./style"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function Login() {
  const [name, setName] = useState({
    username: '',
    password: '',
  })

  const onChange = (e: any) => {
    setName({
      ...name,
      [e.target.name]: e.target.value
    })
  }

  return (
    <LoginCointainer>
      <div className="login-form">
        <h2>Log in</h2>
        <p>Username</p>
        <input placeholder="Username or email" name="username" onChange={onChange} value={name.username} type="text" />
        <p>Password</p>
        <input placeholder="Password" name="password" onChange={onChange} value={name.password} type="password" />
        <Button className="login-btn" variant="contained">Log in</Button>
      </div>
      <div className="register-box">
        <p>Don't you have any account?</p>
        <Link to="/register" className="register">Register</Link>
      </div>
    </LoginCointainer>
  )
}
