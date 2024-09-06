import { Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var [emp, setEmp] = useState([]) 
    useEffect(() => {
        axios.get("http://localhost:3004/find")
            .then((res) => {
                console.log(res)
                setEmp(res.data)
            })
            .catch((err) => console.log(err))

    })
   
       
    const delValue = (id) => {
            axios.delete('http://localhost:3004/remove/' + id)
             .then((response) => {
                 console.log(response.data.message)
                 alert("Employee Delete")
                 window.location.reload()
        })
    }


    return (
        <div>
            <h1> VIEW </h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Dept</TableCell>
                            <TableCell>Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emp.map((val) => {
                            return (
                                <TableRow>
                        <TableCell>{val.Name} </TableCell>
                        <TableCell>{val.Age}</TableCell>
                        <TableCell>{val.Dept}</TableCell>
                        <TableCell>{val.sal}</TableCell>
                                    <TableCell>
                                        <Button size="small" variant='contained'>Update</Button>&nbsp;
                                        <Button size="small" variant='contained' onClick={() => {
                                            delValue(val._id)
                                        }}>Delete</Button>
                                    </TableCell>            
                     </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>     
            </TableContainer>
        


        </div>
    )
}

export default View