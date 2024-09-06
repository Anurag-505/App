import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
    return (
        <div>
            <h1> ADD </h1>
            <TextField label="Name" variant="outlined" />
            <br /><br />
            <TextField label="Age"  variant="outlined" />
            <br /><br />
            <TextField label="Dept" variant="outlined" />
            <br /><br />
            <TextField label="Salary" variant="outlined" />
            <br/><br />
            <Button variant="contained">ADD</Button>


        </div>
    )
}

export default Add