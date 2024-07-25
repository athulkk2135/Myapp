import React, { useEffect, useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'

const Greeting = () => {
    const [val, newval] = useState(null);
    const React = () => {
        newval("React");
    }

    const Angular = () => {
        newval("Angular");
    }

    const View = () => {
        newval("View");
    }
    
        
    
  return (
      <div>
          <Typography variant='h6'>Welome to{val }</Typography> <br /><br />
          <Button variant="contained" color="error" onClick={React}>React</Button> <br /> <br />
          <Button variant="contained" color="error" onClick={Angular}>Angular</Button> <br /> <br />
          <Button variant="contained" color="error" onClick={View}>View</Button> <br /><br />
    </div>
  )
}

export default Greeting