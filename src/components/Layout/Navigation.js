import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ContactForm } from "../ContactForm";

// const variants = {
//     open: {
//         transition: { staggerChildren: 0.07, delayChildren: 0.2 }
//     },
//     closed: {
//         transition: { staggerChildren: 0.05, staggerDirection: -1 }
//     }
// };

export const Navigation = ({ isOpen, toggle }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  });

  return (
    <div
      style={{ width: isOpen ? "100%" : "0" }}
      id="mySidenav"
      className="sidenav my-menu"
    >
      {/* <div className="float-left w-100">

            </div> */}
      <a className="nav-logo pointer">
        <Link href="/">
          <img className="float-left" src="img/logo.png" alt="logo" />
        </Link>
      </a>
      <a className="closebtn pointer" onClick={toggle}>
        ×
      </a>
      <div className="my-menu-div">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4 col-md-6">
            <ul>
              <li>
                {" "}
                <Link href="/">
                  <a className="nav-link">
                    <span>01</span> Home
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/about">
                  <a className="nav-link">
                    <span>02</span> About
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/service">
                  <a className="nav-link">
                    <span>03</span> Services
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://calendly.com/jaskhatri/15min"
                >
                  <span>04</span> Consultation
                </a>
              </li>
              <li>
                {" "}
                <Link href="/contact-us">
                  <a className="nav-link">
                    <span>05</span> Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {!isMobile && (
            <>
              <div className="col-lg-5 col-md-6">
                <div className="contact-us-section">
                  <div className="heading-block">
                    <p>
                      Do you have a project you want to share and discuss with
                      us? Let us help you figure out your digital strategy, web
                      development project or creative ideas.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="contact-us-section mt-5 pt-80">
                  <div className="row">
                    <div className="col-md-12 nav-contact-details">
                      <p className="get-content  text-left">
                        <i className="inline-flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={["fas", "map-marker-alt"]}
                            height="20px"
                          />
                        </i>
                        <span>Address</span>{" "}
                        <a href="#" className="p-0">
                          Central spine, Vidhyadhar Nagar, jaipur
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 nav-contact-details">
                      <p className="get-content  text-left">
                        <i className="inline-flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={["fas", "phone-alt"]}
                            height="20px"
                          />
                        </i>
                        <span>Phone</span>
                        <a href="tel:918387969879" className="p-0">
                          +91-8387969879
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12 nav-contact-details">
                      <p className="get-content  text-left">
                        <i className="inline-flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={["fas", "envelope"]}
                            height="20px"
                          />
                        </i>
                        <span>Email</span>
                        <a href="mailto: jas@cyaniclab.com" className="p-0">
                          jas@cyaniclab.com, cyaniclab@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const itemIds = [0, 1, 2, 3, 4];
