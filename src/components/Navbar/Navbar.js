import React from 'react';
import '../Navbar/Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.jpg'
export default function Navbar() {
  const { logout, isAuthenticated, loginWithPopup, user } = useAuth0();

  const navItems = [
    { title: 'Home', path: '/' , protected: false},
    { title: 'About', path: '/Home' , protected: false},
    { title: 'Appointment', path: '/Appointment' , protected: true},
    { title: 'BMI', path: '/BMI' , protected: true},
    { title: 'Blood-Donation', path: '/BloodDonation' , protected: true},
    { title: 'Contact-Us', path: '/ContactUs' , protected: false},
  ]

  const authClick = () => {
    isAuthenticated ? 
      logout({ returnTo: window.location.origin }) 
      :  loginWithPopup();
  }

  return (
    <nav class=" navbar navbar-expand-lg navbar-light bg-light ">
      <NavLink className='Navbar-Nav2 navbar-brand' to='/'><h1>Sparsh</h1></NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>

      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className='navbar-nav'>
          {
            navItems.filter((item) => isAuthenticated ? true : !item.protected ).map((item) => {
              return (
                <NavLink className='Navbar-Nav2 nav-item nav-link' id={item.title} to={item.path}>{item.title}</NavLink>
              )
            })
          }
          <img onClick={authClick} 
            className="img-circle" src={user? user.picture : profile} alt={user?.name} 
          />
        </div>
      </div>
    </nav>
  )
}
