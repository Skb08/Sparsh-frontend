import React, { useState } from "react";
import "../Content/style.css";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";

export default function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBMI] = useState("");

  function calculateBMI(e) {
    e.preventDefault(); 

    const h = height / 100;
    const bmi = weight / (h * h);
    console.log(h);

    if (bmi < 16) {
      setMessage("Severe Thinness. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 16 && bmi < 17) {
      setMessage("Moderate Thinness. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 17 && bmi < 18.5) {
      setMessage("Mild Thinness. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage("Healthy weight. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("Overweight. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 30 && bmi < 35) {
      setMessage("Obese Class I. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 35 && bmi < 40) {
      setMessage("Obese Class II. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 40) {
      setMessage("Obese Class III. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
    }
  }

  return (
    <>
      <Navbar />
      <div className="BMI-container">
        <form className="BMI-panel">
          <div className="BMI-inputBox">
            <h2 className="BMI-text-center">Check your BMI</h2>
            <input
              value={weight}
              type="text"
              placeholder="Weight (in kg)"
              onChange={(e) => setWeight(e.target.value)}
              required
              autoComplete="off"
            />
            <input
              value={height}
              type="text"
              placeholder="Height (in cm)"
              onChange={(e) => setHeight(e.target.value)}
              required
              autoComplete="off"
            />
            <Button
              type="submit"
              id="BMI-submit"
              variant="contained"
              onClick={calculateBMI}
            >Calculate
            </Button>
          </div>
          <div className="BMI-result">
            <h2>{message} {bmi}</h2>
          </div>
        </form>
      </div>
    </>
  );
}
