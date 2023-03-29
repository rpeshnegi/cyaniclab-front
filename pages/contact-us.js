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
                        <div className="col-lg-1 col-md-12">&nbsp;</div>
                        <div className="col-lg-5 col-md-12 address-div">
                            <p className="get-content">
                                <i><FontAwesomeIcon icon={["fas", "map-marker-alt"]} height="20px"  className="mx-auto -ml-1 mt-2.5 h-auto" /></i>
                                <span>Address</span> <a href="#">Central spine, Vidhyadhar Nagar, jaipur.</a></p>
                            <p className="get-content">
                                <i ><FontAwesomeIcon icon={["fas", "phone-alt"]} height="20px" className="mx-auto -ml-1 mt-2.5 h-auto"  /></i>
                                <span>Phone</span><a href="tel:918387969879">+91-8387969879</a></p>
                            <p className="get-content">
                                <i ><FontAwesomeIcon icon={["fas", "envelope"]} height="20px" className="mx-auto -ml-1 mt-2.5 h-auto"  /></i>
                                <span>Email</span><a href="mailto: jas@cyaniclab.com">jas@cyaniclab.com, cyaniclab@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
