import {Routes, Route } from 'react-router-dom'
import LandingPage from "../LandingPage/LandingPage";
import SignInPage from '../SignInPage/SignIn';
import SignUp from '../SignUpPage/SignUp';
import Home from '../HomePage/Home';

function Router() {
  return (
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/SignIn" element={<SignInPage/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Home" element={<Home/>}/>
        </Routes>  
  );
}

export default Router;