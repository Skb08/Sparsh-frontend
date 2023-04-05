import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { Button } from '@mui/material'
import '../Content/style.css'
import BloodImg from '../../images/blood-img.png'

export default function BloodDonation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [BMI, setBMI] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, phone: phone, bloodgroup: bloodgroup, pin: pin, address: address };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  return (
    <>
      <Navbar />
      <div className='Blooddonation-container'>
        <div className="Blooddonation-container1">
          <div className='Blooddonation-img'>
            <img src={BloodImg} alt="suraj"/>
            <div className='Blooddonation-img-content'>
              <NavLink className='Blooddonation-NavLink' to="/BMI">Calculate your BMI</NavLink>
            </div>
          </div>
          <form className="Blooddonation-form-2" action="/Appointment" method="POST" onSubmit={submitForm}>
            <h1 className="heading"> <span>Blood</span> Donation </h1>
            <div className="inputBox">
              <input type="text" placeholder="Full name" name="name" required autoComplete='off'
                value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Phone" name="phone" required autoComplete='off'
                value={phone} onChange={(e) => setPhone(e.target.value)} />
              <select name="bloodgroup" id="udit" value={bloodgroup} onChange={(e) => setBloodgroup(e.target.value)}>
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
                value={BMI} onChange={(e) => setBMI(e.target.value)} />
              <input type="number" placeholder="Pin" id="appintment-date" name="pin" required autoComplete='off'
                value={pin} onChange={(e) => setPin(e.target.value)} />
              <input type="text" placeholder="Address" id="appintment-date" name="address" required autoComplete='off'
                value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <br />
            <Button type='submit' id="submit-app" variant="contained">Submit</Button>
          </form>

        </div>
      </div>
    </>

  )
}
