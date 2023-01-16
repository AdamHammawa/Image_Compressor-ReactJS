import React from "react";

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
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/Compresspage">Compress</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
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