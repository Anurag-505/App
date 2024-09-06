import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}  > EMPLOYEE</Typography>
                    <br />
                    
                    <Link to='/home'>
                        <Button variant='contained'>Home</Button></Link>
                    &nbsp;
                    <Link to='/add'>
                        <Button variant='contained' color='secondary'>Add</Button>
                    </Link>
                    &nbsp;
                    <Link to='/view'>
                        <Button variant='contained'>View</Button></Link>
                    
                    
                </Toolbar>
            </AppBar>
            <br /><br /><br /><br /><br />
        </div>
    )
}

export default Navbar