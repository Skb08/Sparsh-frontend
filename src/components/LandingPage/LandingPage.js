import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material';
import '../LandingPage/LandingPage.css'

export default function LandingPage() {
  return (
      <>
        <div className='Landing-container'>
          <h1>Sparsh</h1>
          <h5>"Your health is our top priority - let us guide you on your journey to wellness."</h5>
          <NavLink className='NavLink' to="/SignIn"><Button variant="contained">Sign in</Button></NavLink> 
        </div>
      </>
  );
}
