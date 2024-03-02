import React from 'react';
import "../index.css";
import { useNavigate } from "react-router-dom";
import monkey from "../Images/monkey.png";
import msg from "../Images/msg.png";
import back from "../Images/back.png";
import next from "../Images/next.png";

const IntroScreen = () => {

    const navigate = useNavigate();

  function handleNext(e) {
    e.preventDefault();
    navigate("/introscreentwo");
  }

  function handleBack(e){
    e.preventDefault();
    navigate("/")
  }

  return (
    <div className="intro-screen">
      <span className="back-btn">
        <img src={back} onClick={handleBack} alt="back-btn" />
      </span>
      <span className="msg">
        <img src={msg} alt="msg" />
        <p>
          Hi, I am Mizo !<br />
          and I love Bananas 🍌
        </p>
      </span>
      <span className="monkey">
        <img src={monkey} alt="monkey" />
      </span>
      <span className="next-btn">
        <img src={next} className="nextBtn" onClick={handleNext} alt="nextBtn" />
      </span>
    </div>
  

  )
}

export default IntroScreen;