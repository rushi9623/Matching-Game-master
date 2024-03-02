import React from 'react';
import "../index.css";
import { useNavigate } from "react-router-dom";
import monkey from "../Images/monkey.png";
import msg from "../Images/msg.png";
import back from "../Images/back.png";
import yes from "../Images/yes.png";

const IntroScreenTwo = () => {
    const navigate = useNavigate();

    function handleYes(e) {
      e.preventDefault();
      navigate("/instruction");
    }
  
    function handleBack(e){
      e.preventDefault();
      navigate("/introscreen")
    }
  
    return (
      <div className="intro-screen-two">
        <span className="back-btn">
          <img src={back} onClick={handleBack} alt="back-btn" />
        </span>
        <span className="msg">
          <img src={msg} alt="msg" />
          <p>Can you help me get some? 🤔</p>
        </span>
        <span className="monkey">
          <img src={monkey} alt="monkey" />
        </span>
        <span className="yes-btn">
          <img src={yes} className="yesBtn" onClick={handleYes} alt="yesBtn" />
        </span>
      </div>
    
  )
}

export default IntroScreenTwo;