import React from 'react';
import "../index.css";
import { useNavigate } from "react-router-dom";
import back from "../Images/back.png";
import play from "../Images/play.png";
import bar from "../Images/bar.png";
import banana from "../Images/banana.png";
import step1 from "../Images/step1.png";
import step2 from "../Images/step2.png";
import step3 from "../Images/step3.png";
import step1a from "../Images/step1a.png";

const Instruction = () => {
 
    const navigate = useNavigate();

  function handlePlay(e) {
    e.preventDefault();
    navigate("/activityscreen");
  }

  function handleBack(e){
    e.preventDefault();
    navigate("/introscreentwo")
  }

  return (
    <div className="instruction">
      <span className="bar">
        <img src={bar} alt="bar" />
        <img src={banana} alt="banana" />
      </span>
      <span className="backBtn">
        <img src={back} onClick={handleBack} alt="back-btn" />
      </span>

      <div className="instruction-section">
        <div className="steps">
          <div className="step-img">
            <img src={step1} alt="step1" />
            <img src={step1a} alt="step1a" />
          </div>
          <div className="step-content">
            <div className="step-number">
              <span>01</span>
            </div>
            <div className="content">
              <p>Select a pink card</p>
              <span>It has images.</span>
            </div>
            <div></div>
          </div>
        </div>
        <div className="steps">
          <div className="step-img">
            <img src={step2} alt="step2" />
          </div>
          <div className="step-content">
            <div className="step-number">
              <span>02</span>
            </div>
            <div className="content">
              <p>Select a blue card</p>
              <span>It has alphabets.</span>
            </div>
            <div></div>
          </div>
        </div>
        <div className="steps">
          <div className="step-img">
            <img src={step3} alt="step3" />
          </div>
          <div className="step-content">
            <div className="step-number">
              <span>03</span>
            </div>
            <div className="content">
              <span>If they are same</span>
              <p>Its a match !</p>
              <span>otherwise retry :(</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <span className="play-btn">
        <img src={play} className="playBtn" onClick={handlePlay} alt="playBtn" />
      </span>
    </div>
  
  )
}

export default Instruction;