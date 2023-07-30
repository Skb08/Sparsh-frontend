import React,{useState} from 'react'
import { Button } from '@mui/material'
import '../Content/style.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';


export default function Appointment() {
  const navigate = useNavigate();
  const {user} = useAuth0();
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(""); 
  const [textarea, setTextarea] = useState("");
  const [timming, setTimming] = useState("");
  const url = process.env.URL || 'https://sparsh01.onrender.com';
  const submitForm = (e) => { 
    e.preventDefault();
    const newEntry = { name:name, email: email, phone: phone, date: date, timming: timming, textarea: textarea };
    console.log(newEntry);
    fetch(`${url}/appointment`, { 
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
      <div className='Appointment-container'>
        <div className="Appointment-container1">
          
            <form className="Appointment-form-2">
              <h1 className="heading"> <span>Make an</span> Appointment </h1>
              <div className="inputBox">
                <input type="text" placeholder="full name" name="name" required autoComplete='off' 
                  value={user?.name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="your email" name="email" required autoComplete='off' 
                  value={user?.email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="phone" name="phone" required autoComplete='off' 
                  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="date" id="appintment-date" name="date" required autoComplete='off' 
                  value={date} onChange={(e) => setDate(e.target.value)}/>
                <select name="timing" id="udit" value={timming} onChange={(e) => setTimming(e.target.value)}>
                  <option className="appoinment"  disabled value = "" required >make an appointment</option>
                  <option value="09 AM - 11 AM">09 AM - 11 AM</option>
                  <option value="11 AM - 01 PM">11 AM - 01 PM</option>
                  <option value="03 PM - 05 PM">03 PM - 05 PM</option>
                  <option value="06 PM - 09 PM">06 PM - 09 PM</option>
                </select>
              </div>

              <textarea name="textarea" id="textarea" cols="33" rows="5" placeholder="Describe your health issue" required 
                value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
              <br />

              <Button type='submit' id="submit-app" variant="contained" onClick={submitForm}>Submit</Button>
            </form>
        </div>
      </div>
    </>
  )
}
