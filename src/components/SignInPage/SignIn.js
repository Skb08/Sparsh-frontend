import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './SignIn.css'

export default function SignIn() {
  return (
    <div className='SignIn-container'>
      <div>Welcome to Sign in page</div>
      <NavLink className='NavLink' to="/SignUp"><Button variant="contained">Sign Up</Button></NavLink> 
    </div>
  )
}
