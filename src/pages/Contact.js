import React from "react";
import "../contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <section class="contact">
        <div class="container contact__container">
          <aside class="contact__aside">
            <div class="aside__image">
              <img src="./images/contact.svg" alt="" />
            </div>
            <h2>Contact Us</h2>
            <p>For more info, do not hesitate to contact us</p>
            <ul class="contact__details">
              <li>
                <i class="uil uil-phone-times"></i>
                <h5>+2348149161666</h5>
              </li>
              <li>
                <i class="uil uil-envelope"></i>
                <h5>support@college.com</h5>
              </li>
              <li>
                <i class="uil uil-location-point"></i>
                <h5>Abuja, Nigeria</h5>
              </li>
            </ul>
            <ul class="contact__socials">
              <li>
                <a href="https://facebook.com">
                  <i class="uil uil-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i class="uil uil-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <i class="uil uil-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com">
                  <i class="uil uil-linkedin-alt"></i>
                </a>
              </li>
            </ul>
          </aside>

          <form class="contact__form">
            <div class="form__name">
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              name="Email Address"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Type your Message"
              required
            ></textarea>
            <button type="submit" class="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default Contact;
