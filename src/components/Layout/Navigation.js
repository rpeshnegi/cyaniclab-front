import * as React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

// const variants = {
//     open: {
//         transition: { staggerChildren: 0.07, delayChildren: 0.2 }
//     },
//     closed: {
//         transition: { staggerChildren: 0.05, staggerDirection: -1 }
//     }
// };

export const Navigation = ({ isOpen, toggle }) => (
    <div style={{ width: (isOpen ? '100%' : '0') }} id="mySidenav" className="sidenav my-menu" >
        <a className="closebtn" onClick={toggle}>×</a>
        <div className="my-menu-div">
            <div className="row justify-content-between">
                <div className="col-md-4">
                    <ul>
                        <li> <Link href="/about"><a className="nav-link" ><span>01</span> About</a></Link></li>
                        <li> <Link href="/service"><a className="nav-link" ><span>02</span> Services</a></Link></li>
                        <li> <a className="nav-link" target="_blank" href="https://calendly.com/jaskhatri/15min"><span>03</span> Consultation</a></li>
                        <li> <Link href="/contact-us"><a className="nav-link" ><span>04</span> Contact</a></Link></li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <div className="contact-us-section">
                        <div className="heading-block">
                            <p>Do you have a project you want to share and discuss with us? Let us help you figure out your digital strategy, web development project or creative ideas.</p>
                        </div>
                        <form className="contact-form">
                            <span>*All fields are required.</span>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                    <ul className="mt-0">
                        <li className="social-links">
                            <a href="#" className="social">
                                <FontAwesomeIcon icon={["fab", "facebook-f"]} height="25px" />
                            </a>
                            <a href="#" className="social"><FontAwesomeIcon icon={["fab", "instagram"]} height="25px" /></a>
                            <a href="#" className="social"><FontAwesomeIcon icon={["fab", "linkedin-in"]} height="25px" /></a>
                            <a href="#" className="social"><FontAwesomeIcon icon={["fab", "twitter"]} height="25px" /></a>
                        </li>
                    </ul>
                </div>
                <div className="w-100 clearfix">&nbsp;</div>
                <div className="col-12">
                    <div className="contact-us-section pr-0">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="get-content  text-left">
                                    <i ><FontAwesomeIcon icon={["fas", "map-marker-alt"]} height="20px" /></i>
                                    <span>Address</span> <a href="#" className="p-0">Lorem Ipsum is simply dummy text of<br /> the printing and typesetting industry.</a></p>
                            </div>
                            <div className="col-md-4">
                                <p className="get-content  text-left">
                                    <i ><FontAwesomeIcon icon={["fas", "phone-alt"]} height="20px" /></i>
                                    <span>Phone</span><a href="#" className="p-0">+91-987654321</a></p>
                            </div>
                            <div className="col-md-4">
                                <p className="get-content  text-left">
                                    <i ><FontAwesomeIcon icon={["fas", "envelope"]} height="20px" /></i>
                                    <span>Email</span><a href="#" className="p-0">info@cyaniclab.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
);

const itemIds = [0, 1, 2, 3, 4];
