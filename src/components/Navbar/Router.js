import {Routes, Route } from 'react-router-dom'
import LandingPage from "../LandingPage/LandingPage";
import SignInPage from '../SignInPage/SignIn';
import SignUp from '../SignUpPage/SignUp';
import Home from '../HomePage/Home';
import Appointment from '../Content/Appointment';
import BloodDonation from '../Content/BloodDonation';
import BMI from '../Content/BMI';
import ContactUs from '../Content/ContactUs';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar';

function Router() {
  const { isAuthenticated, isLoading } = useAuth0();

  return isLoading ? <div>Loading...</div> : (
    <> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/SignIn" element={<SignInPage/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Home" element={<Home/>}/>
          {isAuthenticated && (
            <>
              <Route path="/Appointment" element={<Appointment/>} />
              <Route path="/BloodDonation" element={<BloodDonation/>} />
              <Route path="/BMI" element={<BMI/>} />
            </>
          )}
          <Route path="/ContactUs" element={<ContactUs/>}/>
          {/* Redirect if not found */}
          <Route path="*" element={<LandingPage/>} />
        </Routes>  
      </>
  );
}

export default Router;