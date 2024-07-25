import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';

const Counter = () => {
    var [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
    }
    const sub = () => {
        setCount(count - 1)
    }

  return (
      <div>
          <Typography variant='h3'>Count:{count}</Typography>
          <Button variant="contained" color="success" onClick={sub}>-</Button>&nbsp;
          <Button variant="contained" color="success" onClick={add}>+</Button>
          

    </div>
  )
}

export default Counter