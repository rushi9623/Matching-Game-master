import React from 'react';
import "../index.css";
import { useNavigate } from "react-router-dom";
import back from "../Images/back.png";
import bar from "../Images/bar.png";
import banana from "../Images/banana.png";
import step1 from "../Images/step1.png";
import step2 from "../Images/step2.png";


const ActivityScreen = () => {

  const navigate = useNavigate();

  function handleBack(e){
    e.preventDefault();
    navigate("/instruction");
  }

  return(
    <div className="activity-screen">
      <span className="bar">
        <img src={bar} alt="bar" />
        <img src={banana} alt="banana" />
      </span>
      <span className="backBtn-act">
        <img src={back} onClick={handleBack} alt="back-btn" />
      </span>


      <div className="playing-area">
          <div className="left-side">
        
          <img className="front" src={step1} alt="orange" />
          <img src={step1} alt="apple" />
          <img src={step1} alt="empty" />
           <img src={step1} alt="empty" />
           <img src={step1} alt="empty" />
           <img src={step1} alt="empty" /> 

        
        </div>
        <div className="right-side">
          <img src={step2} alt="a" />
          <img src={step2} alt="o" />
          <img src={step2} alt="empty" />
          <img src={step2} alt="empty" />
          <img src={step2} alt="empty" />
          <img src={step2} alt="empty" />

        </div>
      </div>





    </div>

 
  )
}

export default ActivityScreen;