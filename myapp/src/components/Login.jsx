import { Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login</h1>
          <input type="text" name='' id='' placeholder='username' /> <br /> <br />
          <input type="text" name='' id='' placeholder='password' /> <br /> <br />
          <Button variant='contained'>Login</Button>
          
    </div>
  )
}

export default Login