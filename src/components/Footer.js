import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-md-7 mt-3 mt-md-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="your email address"
                  aria-label="your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <footer className="py-5 text-white">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <h4 className="mb-4">About Us</h4>
              <p className="fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
              <address className="text-muted fs-6 mt-3">
                hno: Mirpur-2,
                <br />
                Dhaka-1216
                <br />
                pincode:1190282
              </address>
              <div className="social-icons mt-4">
                <a href="#" className="text-white me-3">
                  <BsLinkedin className="fs-4" />
                </a>
                <a href="#" className="text-white me-3">
                  <BsGithub className="fs-4" />
                </a>
                <a href="#" className="text-white me-3">
                  <BsYoutube className="fs-4" />
                </a>
                <a href="#" className="text-white">
                  <BsInstagram className="fs-4" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h4 className="mb-4">Information</h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-muted mb-2 text-decoration-none"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="text-muted mb-2 text-decoration-none"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="text-muted mb-2 text-decoration-none"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-condition"
                    className="text-muted mb-2 text-decoration-none"
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-muted mb-2 text-decoration-none"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h4 className="mb-4">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-muted mb-2 text-decoration-none">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="text-muted mb-2 text-decoration-none">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link className="text-muted mb-2 text-decoration-none">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h4 className="mb-4">Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-muted mb-2 text-decoration-none">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link className="text-muted mb-2 text-decoration-none">
                    Headphones
                  </Link>
                </li>
                <li>
                  <Link className="text-muted mb-2 text-decoration-none">
                    Tablet
                  </Link>
                </li>
                <li>
                  <Link className="text-muted mb-2 text-decoration-none">
                    Watch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center  mb-0 text-white">
                &copy; {new Date().getFullYear()}; powered by Rajon
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
