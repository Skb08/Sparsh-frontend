import React from 'react'
// import {NavLink } from 'react-router-dom'
import '../LandingPage/LandingPage.css';
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <>
      <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <h1>Your Health is Our Top Priority</h1>
              <h2>let us guide you on your journey to wellness.</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                {!isAuthenticated && <button onClick={() => loginWithRedirect()} className="btn-get-started scrollto text-decoration-none">Log In</button>}
                {/* {isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  className="btn-get-started scrollto text-decoration-none"
                >Log Out</button>} */}
                {/* <NavLink to="/SignIn" className="btn-get-started scrollto text-decoration-none">Sign In</NavLink> */}
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
