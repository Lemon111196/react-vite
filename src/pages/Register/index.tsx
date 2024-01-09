import { Button } from "@mui/material";
import { RegisterContainer } from "./style";
import { useState } from "react";

export default function Register() {
  const [account, setAccount] = useState({
    username: '',
    password: '',
    rePassword: '',
    fullName: '',
    phoneNumber: '',
  })
  const handleRegister = () => {
    
  }
  const onChange = (e: any) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value
    })
    console.log(account);
  }
  const handleKeyDown = (e: any) => {
    const keyCode = e.keyCode || e.which;
    // const keyValue = String.fromCharCode(keyCode);
    if (keyCode && (keyCode <= 47 || keyCode >= 58) && keyCode != 8) {
      e.preventDefault();
    }
  }
  return (
    <RegisterContainer>
      <div className="reg-form">
        <h2>Register</h2>
        <p>Username</p>
        <input name="username" placeholder="Username" type="text" onChange={onChange} value={account.username} />
        <p>Password</p>
        <input placeholder="Password" name="password" onChange={onChange} value={account.password} type="password" />
        <p>Confirm Password</p>
        <input name="rePassword" placeholder="Confirm password" type="password" onChange={onChange} value={account.rePassword} />
        <p>Full Name</p>
        <input name="fullName" placeholder="Full name" type="text" onChange={onChange} value={account.fullName} />
        <p>Phone Number</p>
        <input name="phoneNumber" placeholder="Phone number" type="text" onKeyDown={handleKeyDown} onChange={onChange} value={account.phoneNumber} />
        <Button onClick={handleRegister} className="reg-btn" variant="contained">Register</Button>
      </div>
    </RegisterContainer>
  )
}
