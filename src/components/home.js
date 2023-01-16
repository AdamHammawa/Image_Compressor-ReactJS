import React from "react";
import Navbar from "./Navbar";
import { Image } from "semantic-ui-react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <header>
          <div class="container header__container">
            <div class="header__left">
              <h1>Compress Images to your taste</h1>
              <p>
                You dont have to exhuast your storage, compress those images now
                efficiently
              </p>
              <a href="/Compresspage" class="btn btn-primary">
                Get Started
              </a>
            </div>
            <div class="header__right">
              <div class="header__right-image">
                <Image src="assets/images/camera.png"></Image>
              </div>
            </div>
          </div>
        </header>

        <section class="categories">
          <div class="container categories__container">
            <div class="categories__left">
              <h1>Why you should Compress Images</h1>
              <p>
                The objective of image compression is to reduce irrelevance and
                redundancy of the image data to be able to store or transmit
                data in an efficient form.
              </p>
              <a href="/Compresspage" class="btn">
                Start Now
              </a>
            </div>
            <div class="categories__right">
              <article class="category">
                <span class="category__icon">
                  <i class="uil uil-palette"></i>
                </span>
                <h5>Lower image size</h5>
                <p>
                  There are situations when you need images in smaller size such
                  as when uploading images on the web.
                </p>
              </article>
              <article class="category">
                <span class="category__icon">
                  <i class="uil uil-bitcoin-circle"></i>
                </span>
                <h5>Faster upload</h5>
                <p>
                  Not only it requires less storage space, but a smaller image
                  size also means faster upload.
                </p>
              </article>

              <article class="category">
                <span class="category__icon">
                  <i class="uil uil-puzzle-piece"></i>
                </span>
                <h5>Faster website load</h5>
                <p>
                  We all hate slow-loading websites. The good news is smaller
                  image size has a faster website load.{" "}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section class="container testimonials__Container mySwiper"></section>

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
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="courses.html">Compress</a>
                </li>
              </ul>
            </div>

            <div class="footer__3">
              <h4>Privacy</h4>
              <ul class="privacy">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
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
                  <a href="#">
                    <i class="uil uil-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="uil uil-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="uil uil-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
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

        <script src="assets/js/main.js"></script>
      </div>
    );
  }
}

export default Home;
