import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var [names, setNames] = useState(
        [
            { "sname": "Tiya", "age": 18 },
             { "sname": "Riya", "age": 19 },
              { "sname": "Siya", "age": 20 }

        ]
    )
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody>
                      {names.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.sname}</TableCell>
                                  <TableCell>{val.age}</TableCell>
                              </TableRow>
                          )
                      })}
                
                      </TableBody>
                  X
              </Table>
          </TableContainer>
          
    </div>
  )
}

export default Mapping