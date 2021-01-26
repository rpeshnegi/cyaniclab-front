import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactUs() {
    return (
        <>
            <section class="contact-us-section pb-0">
                <div class="container">
                    <div class="heading-block text-center">
                        <h2>Work <span>with us</span></h2>
                        <p>Do you have a project you want to share and discuss with us? Let us help you figure out your digital strategy, web development project or creative ideas.</p>
                    </div>
                    <div class="row align-items-center  justify-content-center">
                        <div class="col-lg-6 col-md-12">
                            <form class="contact-form">
                                <span>*All fields are required.</span>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" class="btn">Submit</button>
                            </form>
                        </div>
                        <div class="col-lg-6 col-md-12 address-div">
                            <p class="get-content">
                                <i ><FontAwesomeIcon icon={["fas", "map-marker-alt"]} height="20px" /></i>
                                <span>Address</span> <a href="#">Lorem Ipsum is simply dummy text of<br /> the printing and typesetting industry.</a></p>
                            <p class="get-content">
                                <i ><FontAwesomeIcon icon={["fas", "phone-alt"]} height="20px" /></i>
                                <span>Phone</span><a href="#">+91-987654321</a></p>
                            <p class="get-content">
                                <i ><FontAwesomeIcon icon={["fas", "envelope"]} height="20px" /></i>
                                <span>Email</span><a href="#">info@cyaniclab.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}