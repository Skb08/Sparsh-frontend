import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import SingIn from './SingIn';

export default function LandingPage() {
  return (
    <>
    <h1>Landing Page</h1>
    <button type=""><Link to="/singin">Sing In</Link></button>
    
    </>
    
    // <BrowserRouter>
    //   <h1>Landing Page</h1>
    //   {/* <Routes>
    //   <button type="">
    //     <Route path="/singin" element={<SingIn/>}/>
    //   </button>  
    //   </Routes> */}
    // </BrowserRouter>
      
     
    
  );
}
