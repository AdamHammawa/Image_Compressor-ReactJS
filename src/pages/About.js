import React from "react";
import "../about.css";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <section class="about__achievements">
        <div class="container about__achievements-container">
          <div class="about__achievements-left">
            <img src="assets/images/about achievements.svg" alt="" />
          </div>
          <div class="about__achievements-right">
            <h1>About Us</h1>
            <p>
              The objective of image compression is to reduce irrelevance and
              redundancy of the image data to be able to store or transmit data
              in an efficient form.
            </p>
            <div class="achievements__cards">
              <article class="achievement__card">
                <span class="achievement__icon">
                  <i class="uil uil-video"></i>
                </span>
                <h3>450+</h3>
                <p>Happy Clients</p>
              </article>

              <article class="achievement__card">
                <span class="achievement__icon">
                  <i class="uil uil-trophy"></i>
                </span>
                <h3>26+</h3>
                <p>Awards</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default About;
