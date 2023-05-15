import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../HomePage/Home.css'
import graph1 from '../../images/graph-1.jpg' 
import graph2 from '../../images/graph-2.jpg' 
import graph3 from '../../images/graph-3.jpg' 

export default function Home() {
  return (
    <>
        <Navbar/>
        <div className='Home-container'>
          <div className='Home-container-1'>
            <div class="graph-3">
              <img src={graph3} alt="graph"/>
            </div></div>
          <div className='Home-container-2'>
            <div className="container">
              <div className="box-container">
                  <div className="box" data-aos="fade-up">
                    <i className="fas fa-users"></i>
                    <span>150+</span>
                    <h4>staff</h4>
                  </div>
                  
                  <div className="box" data-aos="fade-up">
                    <i className="fas fa-hospital"></i>
                    <span>12+</span>
                    <h4>Hospitals</h4>
                  </div>
                  
                  <div className="box" data-aos="fade-up">
                      <i className="fas fa-procedures"></i>
                      <span>80+</span>
                      <h4>bed facility</h4>
                  </div>
      
                  <div className="box" data-aos="fade-up">
                      <i className="fas fa-smile"></i>
                      <span>1300+</span>
                      <h4>happy patients</h4>
                  </div>
      
                  <div className="box" data-aos="fade-up">
                      <i className="fas fa-ambulance"></i>
                      <span>25+</span>
                      <h4>advance ambulance</h4>
                  </div>
                </div>
            </div>
            <div className="schedule-dash ">
              <h4>Your Appointment Schedule</h4>
              <ul className="schedule-detail">
                  <li>Name : <span> name</span></li>
                  <li>Email : <span>email</span></li>
                  <li>Phone : <span>phone</span></li>
                  <li>Date : <span>date</span></li>
                  <li>Time : <span>time</span></li>
              </ul>
            </div>
            <div className="schedule-dash ">
              <h4>Your Blood Donation Schedule</h4>
              <ul className="schedule-detail">
                  <li>Name : <span> name</span></li>
                  <li>Email : <span>email</span></li>
                  <li>Phone : <span>phone</span></li>
                  <li>Date : <span>date</span></li>
                  <li>Time : <span>time</span></li>
              </ul>
            </div>

            <div class="graph">
              <div class="graph-1">
                  <img src={graph1} alt="graph"/>
              </div>
              <div class="graph-2">
                  <img src={graph2} alt="graph"/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
