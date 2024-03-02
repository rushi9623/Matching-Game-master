import React from 'react';
import "../index.css";
import bg from "../Images/bg.png";


const Background = () => {
  return (
    <div className="background">
      <span className="bg">
        <img src={bg} alt="bg" />
      </span>
    </div>
  )
}

export default Background;