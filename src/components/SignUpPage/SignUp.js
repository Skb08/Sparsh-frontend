import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import '../SignUpPage/SignUp.css'

export default function SignUp() {
  return (
    <div className='SignUp-container'>
      SignUp
      <NavLink className='NavLink' to="/Home"><Button variant="contained">Home</Button></NavLink> 
    </div>
  )
}
