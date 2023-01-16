import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div class="container nav__container">
          <a href="/">
            <h4>IMGCompress</h4>
          </a>
          <ul class="nav__menu">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/Compresspage">Compress</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <button id="open-menu-btn">
            <i class="uil uil-bars"></i>
          </button>
          <button id="close-menu-btn">
            <i class="uil uil-multiply"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
