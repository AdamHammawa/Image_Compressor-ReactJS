import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div class="container footer__container">
          <div class="footer__1">
            <a href="index.html" class="footer__logo">
              <h4>IMGCompress</h4>
            </a>
            <p>Compress Images to your taste.</p>
          </div>
          <div class="footer__2">
            <h4>Premalinks</h4>
            <ul class="premalinks">
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
          </div>

          <div class="footer__3">
            <h4>Privacy</h4>
            <ul class="privacy">
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
              <li>
                <a href="/">Refund Policy</a>
              </li>
            </ul>
          </div>

          <div class="footer__4">
            <h4>Contact Us</h4>
            <div>
              <p>+234 814 916 1666</p>
              <p>adamsani2020@gmail.com</p>
            </div>
            <ul class="footer__socials">
              <li>
                <a href="/">
                  <i class="uil uil-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="uil uil-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="uil uil-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="uil uil-linkedin-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__copyright">
          <small>Copyright &copy; IMGCompress</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
