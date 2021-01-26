import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactForm } from '../src/components/ContactForm';

export default function ContactUs() {
    return (
        <>
            <section className="contact-us-section pb-0">
                <div className="container">
                    <div className="heading-block text-center">
                        <h2>Work <span>with us</span></h2>
                        <p>Do you have a project you want to share and discuss with us? Let us help you figure out your digital strategy, web development project or creative ideas.</p>
                    </div>
                    <div className="row align-items-center  justify-content-center">
                        <div className="col-lg-6 col-md-12">
                            <ContactForm/>
                        </div>
                        <div className="col-lg-6 col-md-12 address-div">
                            <p className="get-content">
                                <i ><FontAwesomeIcon icon={["fas", "map-marker-alt"]} height="20px" /></i>
                                <span>Address</span> <a href="#">Lorem Ipsum is simply dummy text of<br /> the printing and typesetting industry.</a></p>
                            <p className="get-content">
                                <i ><FontAwesomeIcon icon={["fas", "phone-alt"]} height="20px" /></i>
                                <span>Phone</span><a href="#">+91-987654321</a></p>
                            <p className="get-content">
                                <i ><FontAwesomeIcon icon={["fas", "envelope"]} height="20px" /></i>
                                <span>Email</span><a href="#">info@cyaniclab.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}