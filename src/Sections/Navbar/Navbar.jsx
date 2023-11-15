import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <div>
    <nav className="navigation">
      <div class="container-div">
        <b>
          <a href="">MALHAAR</a>
        </b>
        <button className="hamburgerMenu">
          <GiHamburgerMenu />
</button>
        <div className="nav-content">
          <ul>
            <li>
            <Link to = "/event">EVENTS</Link>
            </li>
            <li>
              <Link to = "/sponsors">SPONSORS</Link>
            </li>
            <li>
              <Link to = "/team">TEAM</Link>
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
    </div>
  );
};

export default Navbar;
