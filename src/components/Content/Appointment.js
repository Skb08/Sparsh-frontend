import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { Button } from '@mui/material'
import '../Content/style.css'

export default function Appointment() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [textarea, setTextarea] = useState("");
  const [timming, setTimming] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name:name, email: email, phone: phone, date: date, timming: timming, textarea: textarea };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  return (
    <>
      <Navbar />
      <div className='Appointment-container'>
        <div className="Appointment-container1">
          <h1 className="heading"> <span>Make an</span> Appointment </h1>
          
            <form className="Appointment-form-2" action="/Appointment" method="POST" onSubmit={submitForm}>
              <div className="inputBox">
                <input type="text" placeholder="full name" name="name" required autoComplete='off' 
                  value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="your email" name="email" required autoComplete='off' 
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="phone" name="phone" required autoComplete='off' 
                  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="date" id="appintment-date" name="date" required autoComplete='off' 
                  value={date} onChange={(e) => setDate(e.target.value)}/>
                <select name="timing" id="udit" value={timming} onChange={(e) => setTimming(e.target.value)}>
                  <option className="appoinment" value="" disabled selected>make an appointment</option>
                  <option value="09 AM - 11 AM">09 AM - 11 AM</option>
                  <option value="11 AM - 01 PM">11 AM - 01 PM</option>
                  <option value="03 PM - 05 PM">03 PM - 05 PM</option>
                  <option value="06 PM - 09 PM">06 PM - 09 PM</option>
                </select>
              </div>

              <textarea name="textarea" id="textarea" cols="33" rows="5" placeholder="Describe your health issue" required 
                value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
              <br />

              <Button type='submit' id="submit-app" variant="contained">Submit</Button>
            </form>

          

        </div>
      </div>
    </>
  )
}
