import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography variant='h6'>Byapp</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/a'><Button variant="contained" color='success'>add</Button></Link>&nbsp;&nbsp;&nbsp;
            <Link to='/B'><Button variant="contained" color='success'>view</Button></Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar