import React from 'react';
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class=" navbar navbar-expand-lg navbar-light bg-light ">
      <NavLink className='Navbar-Nav2 navbar-brand' to='/'><h1>Sparsh</h1></NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>

      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className='navbar-nav'>
          <NavLink className='Navbar-Nav nav-item nav-link' to='/Home'>About </NavLink>
          <NavLink className='Navbar-Nav nav-item nav-link' to='/ContactUs'>Contact-Us</NavLink>
        </div>
      </div>
    </nav>
  )
}
