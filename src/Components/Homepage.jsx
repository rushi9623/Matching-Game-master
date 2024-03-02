import React from 'react';
import "../index.css";
import { useNavigate } from "react-router-dom";
import monkey from "../Images/monkey.png";
import msg from "../Images/msg.png";
import start from "../Images/start.png";

const Homepage = () => {
    const navigate = useNavigate();

    function handleStart(e) {
      e.preventDefault();
      navigate("/introscreen");
    }
  
    return (
      <div className="homepage">
        <span className="msg">
          <img src={msg} alt="msg" />
          <p>Welcome Kiddo !</p>
        </span>
        <span className="monkey">
          <img src={monkey} alt="monkey" />
        </span>
        <span className="start-btn">
          <img
            src={start}
            className="startBtn"
            alt="start"
            onClick={handleStart}
          />
        </span>
      </div>
  )
}

export default Homepage;