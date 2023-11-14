import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css";
const Navbar = () => {
  return (
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
              <a href="">EVENTS</a>
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
