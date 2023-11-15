import Logo from "../../assests/Malhaar Logo.png";
import React, { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  return () => clearTimeout(timer);
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});


  return (
    <div> 
     
<div className="malhaar-logo">
  <img  src={Logo} alt="logo" />
</div>

<b className="malhaar-text">MALHAAR STARTS IN</b>
<h3 className="timer">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h3>

    </div>
  );
};

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`11/30/${year}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

export default Header;
