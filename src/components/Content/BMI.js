import React from "react";
import '../Content/style.css'
import Navbar from '../Navbar/Navbar'
import { Button } from '@mui/material';

export default function BMI() {
  return (
    <>
      <Navbar/>
      <div className="BMI-container">
        
          <form className="BMI-panel">
            <div className="BMI-inputBox">
              <h2 className="BMI-text-center">Check your BMI</h2>
                <input type="number" placeholder="Height" name="height" required autoComplete='off' />    
                <input type="number" placeholder="Weight" name="weight" required autoComplete='off' />
                <Button type='submit' id="BMI-submit" variant="contained">Submit</Button>
            </div>
            <div className="BMI-result">Result</div>
          </form>
        
      </div>
    </>
  );
}
