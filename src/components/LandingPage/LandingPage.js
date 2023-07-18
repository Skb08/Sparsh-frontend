import React from 'react'
import {NavLink } from 'react-router-dom'
import '../LandingPage/LandingPage.css';
import Navbar from '../Navbar/Navbar2'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <h1>Your Health is Our Top Priority</h1>
              <h2>let us guide you on your journey to wellness.</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <NavLink to="/SignIn" className="btn-get-started scrollto text-decoration-none">Sign In</NavLink>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" className="img-fluid vert-move" alt="" />
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
