import React from "react";
import Logo from "../../assests/Malhaar Logo.png";
import "./header.css";
const Header = () => {
  return (
    <div> 
<div className="malhaar-logo">
  <img  src={Logo} alt="logo" />
</div>

<b className="malhaar-text">MALHAAR STARTS IN</b>


    </div>
  );
};

export default Header;
