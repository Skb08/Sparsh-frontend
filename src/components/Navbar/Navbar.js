


import React from 'react';
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    // <div className='Navbar-container'>
    //   <div className='Navbar-img'>
    //     <img src="" alt="suraj" />
    //   </div>
    //   <div className='Navbar-content'>
    //     <ul>
    //         <NavLink className='Navbar-Nav' to='/'>Home</NavLink>
    //         <NavLink className='Navbar-Nav' to='/Home'>About</NavLink>
    //         <NavLink className='Navbar-Nav' to='/Appointment'>Appointment</NavLink>
    //         <NavLink className='Navbar-Nav' to='/BMI'>BMI</NavLink>
    //         <NavLink className='Navbar-Nav' to='/BloodDonation'>Blood-Donation</NavLink>
    //         <NavLink className='Navbar-Nav' to='/ContactUs'>Contact-Us</NavLink>
    //       </ul>
    //   </div>
    // </div>
  //   <nav class="navbar navbar-inverse">
  //   <div class="container-fluid">
  //     <div class="navbar-header">
  //       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
  //         <span class="icon-bar"></span>
  //         <span class="icon-bar"></span>
  //         <span class="icon-bar"></span>                        
  //       </button>
  //       <NavLink className='Navbar-Nav2' to='/'><h1>Sparsh</h1></NavLink>
  //     </div>
  //     <div class="collapse navbar-collapse" id="myNavbar">
  //       <ul class="nav navbar-nav">
  //         <li class="active"><a href="#">Home</a></li>
  //         <li class="dropdown">
  //           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
  //           <ul class="dropdown-menu">
  //             <li><a href="#">Page 1-1</a></li>
  //             <li><a href="#">Page 1-2</a></li>
  //             <li><a href="#">Page 1-3</a></li>
  //           </ul>
  //         </li>
  //         <li><a href="#">Page 2</a></li>
  //         <li><a href="#">Page 3</a></li>
  //       </ul>
  //       <ul class="nav navbar-nav navbar-right">
  //         <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
  //         {/* <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> */}
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
    <nav class=" navbar navbar-expand-lg navbar-light bg-light ">
      <NavLink className='Navbar-Nav2 navbar-brand' to='/'><h1>Sparsh</h1></NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className='navbar-nav'>
          {/* <ul> */}
              <NavLink className='Navbar-Nav nav-item nav-link' to='/'>Home </NavLink>
              <NavLink className='Navbar-Nav nav-item nav-link' to='/Home'>About </NavLink>
              <NavLink className='Navbar-Nav nav-item nav-link' to='/Appointment'>Appointment</NavLink>
              <NavLink className='Navbar-Nav nav-item nav-link' to='/BMI'>BMI</NavLink>
              <NavLink className='Navbar-Nav nav-item nav-link' to='/BloodDonation'>Blood-Donation</NavLink>
              <NavLink className='Navbar-Nav nav-item nav-link' to='/ContactUs'>Contact-Us</NavLink>
            {/* </ul> */}
        </div>
      </div>
    </nav>
  )
}
