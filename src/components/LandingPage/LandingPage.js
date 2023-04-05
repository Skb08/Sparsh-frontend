import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material';
import '../LandingPage/LandingPage.css'
import LandingImg from '../../images/Landing-img.jpg';

export default function LandingPage() {
  return (
      <>
        <div className='Landing-container'>
        <img className='LandingImg' src={LandingImg} alt="udit"></img>
          <div>
            <div className='Landing-Navbar'>
              <ul>
                <NavLink className='Landing-Nav' to='/Home'>About</NavLink>
                <NavLink className='Landing-Nav' to='/Appointment'>Appointment</NavLink>
                <NavLink className='Landing-Nav' to='/BMI'>BMI</NavLink>
                <NavLink className='Landing-Nav' to='/BloodDonation'>Blood-Donation</NavLink>
                <NavLink className='Landing-Nav' to='/ContactUs'>Contact-Us</NavLink>
              </ul>
            </div>
            <div className='Landing-content'>
              <h1>Sparsh</h1>
              <br />
              <h5>"Your health is our top priority - "</h5>
              <h5>let us guide you on your journey to wellness.</h5>
              <NavLink className='NavLink' to="/SignIn"><Button variant="contained">Sign in</Button></NavLink> 
            </div>
          </div>
        </div>
      </>
  );
}
