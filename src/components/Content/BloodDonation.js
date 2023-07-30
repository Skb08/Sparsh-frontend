import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import '../Content/style.css'
import BloodImg from '../../images/blood-img.png'
import { useAuth0 } from '@auth0/auth0-react'
const url = process.env.URL || 'https://sparsh01.onrender.com';
export default function BloodDonation() {
  const navigate = useNavigate();
  const {user} = useAuth0();
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState("");
  const [blood, setBloodgroup] = useState("");
  const [bmi, setBMI] = useState("");
  const [pin, setPin] = useState(""); 
  const [address, setAddress] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name:name,phone: phone,blood : blood, bmi : bmi, pin: pin };
    console.log(newEntry);
    fetch(`${url}/donation`, { 
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newEntry)
    })
    .then(res => res.json()) 
    .then(data => console.log(data));
    navigate('/Home');

  }
  
  return (
    <>
      <div className='Blooddonation-container'>
        <div className="Blooddonation-container1">
          <div className='Blooddonation-img'>
            <img src={BloodImg} alt="suraj"/>
            <div className='Blooddonation-img-content'>
              <NavLink className='Blooddonation-NavLink' to="/BMI">Calculate your BMI</NavLink>
            </div>
          </div>
          <form className="Blooddonation-form-2">
            <h1 className="heading"> <span>Blood</span> Donation </h1>
            <div className="inputBox">
              <input type="text" placeholder="Full name" name="name" required autoComplete='off'
                value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Phone" name="phone" required autoComplete='off'
                value={phone} onChange={(e) => setPhone(e.target.value)} />
              <select name="bloodgroup" id="udit" value={blood} onChange={(e) => setBloodgroup(e.target.value)}>
                <option className="appoinment" value="" disabled selected>Select Your Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <input type="number" placeholder="BMI" name="BMI" required autoComplete='off'
                value={bmi} onChange={(e) => setBMI(e.target.value)} />
              <input type="number" placeholder="Pin" id="appintment-date" name="pin" required autoComplete='off'
                value={pin} onChange={(e) => setPin(e.target.value)} />
              <input type="text" placeholder="Address" id="appintment-date" name="address" required autoComplete='off'
                value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <br />
            <Button type='submit' id="submit-app" variant="contained" onClick={submitForm}>Submit</Button>
          </form>

        </div>
      </div>
    </>

  )
}
