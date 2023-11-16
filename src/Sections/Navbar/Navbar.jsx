import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom'

import "./navbar.css";
const Navbar = () => {
  const[isExpanded , setIsExpanded] = useState(false);

  const toggleClass = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navigation">
      <div className={isExpanded ? "container-div  mobile-i" : "container-div"}>
        <b>
          <a href="">MALHAAR</a>
        </b>
        <button className={isExpanded ? "hamburgerMenu close" : "hamburgerMenu"} 
        onClick={toggleClass}>
        {isExpanded ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>

        <div id="ham" className={isExpanded ? "items expanded" : "items"}>
          <ul>
            <li>
              <a href="https://www.cricbuzz.com/">EVENTS</a>
            </li>
            <li>
              <a href="">SPONSORS</a>
            </li>
            <li>
              <a href="">TEAM</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
          </ul>
        </div>
        <div className="nav-content">
          <ul>
            <li>
              <Link to="/event">EVENTS</Link>
            </li>
            <li>
              <a href="">SPONSORS</a>
            </li>
            <li>
              <a href="">TEAM</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary btn-sm">
          Register now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;