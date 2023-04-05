import {Routes, Route } from 'react-router-dom'
import LandingPage from "../LandingPage/LandingPage";
import SignInPage from '../SignInPage/SignIn';
import SignUp from '../SignUpPage/SignUp';
import Home from '../HomePage/Home';
import Appointment from '../Content/Appointment';
import BloodDonation from '../Content/BloodDonation';
import BMI from '../Content/BMI';
import ContactUs from '../Content/ContactUs';

function Router() {
  return (
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/SignIn" element={<SignInPage/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Appointment" element={<Appointment/>} />
          <Route path="/BloodDonation" element={<BloodDonation/>} />
          <Route path="/BMI" element={<BMI/>} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
        </Routes>  
  );
}

export default Router;