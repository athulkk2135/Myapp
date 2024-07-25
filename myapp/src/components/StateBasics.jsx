import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {

    var [fname, setName] = useState("Athul")
    var [val,setval] = useState()
    const handelinput = (e) => {
        setName(e.target.value)
        console.log(fname)
    }
    const submithandler = () => {
        console.log(val)
        setval(fname)
    };
  return (
      <div> <br /> <br />
          <Typography variant='h6'>Welcome{val}</Typography>
          <TextField variant='outlined' onChange={handelinput} /> <br /><br />
          <Button onClick={submithandler}>store</Button>
          
    </div>
  )
}

export default StateBasics
