import React from 'react';
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='Navbar-container'>
      <div className='Navbar-img'>
        <img src="" alt="suraj" />
      </div>
      <div className='Navbar-content'>
        <ul>
            <NavLink className='Navbar-Nav' to='/'>Home</NavLink>
            <NavLink className='Navbar-Nav' to='/Home'>About</NavLink>
            <NavLink className='Navbar-Nav' to='/Appointment'>Appointment</NavLink>
            <NavLink className='Navbar-Nav' to='/BMI'>BMI</NavLink>
            <NavLink className='Navbar-Nav' to='/BloodDonation'>Blood-Donation</NavLink>
            <NavLink className='Navbar-Nav' to='/ContactUs'>Contact-Us</NavLink>
          </ul>
      </div>
    </div>
  )
}
