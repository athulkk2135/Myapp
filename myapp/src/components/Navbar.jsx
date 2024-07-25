import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
            
                  <Typography variant='h6' sx={{ flexGrow: 1 }}>MyApp</Typography>
                  <Link to='/s'>
                      <Button variant="contained" color="error" align="right" >Sign Up</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/l'>
                      <Button variant="contained" color="error" align="right" >Login</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/r'>
                      <Button variant="contained" color="error" align="right" >State</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/c'>
                      <Button variant="contained" color="error" align="right" >Counter</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/g'>
                      <Button variant="contained" color="error" align="right" >Greeting</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/m'>
                      <Button variant="contained" color="error" align="right" >Mapping</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/a'>
                      <Button variant="contained" color="error" align="right" >Api</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/p'>
                      <Button variant="contained" color="error" align="right" >Posts</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/po'>
                      <Button variant="contained" color="error" align="right" >Poke</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
              </Toolbar>
          </AppBar><br /><br /><br /><br /><br />
            
    </div>
  )
}

export default Navbar