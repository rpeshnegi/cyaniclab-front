import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
    footer: {
        padding: '100px 0 60px',
        fontSize: '13px',
        position: 'relative',
        zIndex: 5,
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#fff',
        paddingTop: '100px',
        paddingBottom: '60px',
        '& li': {
            '& a': {
                color: '#fff'
            }
        },
        '& .additional_links': {
            marginTop: '35px'
        },
        '& .footer_link': {
            marginBottom: '20px',
            '& li': {
                display: 'inline-block',
                margin: '0 20px 10px 0'
            }
        },
        '& .footer_address': {
            '& li': {
                display: 'block',
                margin: '0 00px 10px 0'
            }
        },
        '& .tr': {
            textAlign: 'right'
        }
    },
    social_linkLi: {
        display: 'inlineBlock',
        marginRight: '30px',
        fontSize: '13px'
    }
};

const useStyles = makeStyles(style);

const Footer = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <footer>
            <div className="container-fluid">
                <div className="lets_talk tc">
                    <h5>Let's talk <br /> <span>about business</span></h5>
                    <Link href="/contact-us"><a className="btn" >Send message</a></Link>
                </div>
                <div className="contact_form" id="footer_fotm">
                    <div className="row">
                        <div className="col-md-7 col-xs-12 ">
                            <img className="mb-4 " src="img/logo.png" alt="logo" />
                            <ul className="social_link">
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/CyanicLab-310488926246347/">Facebook.</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/CyanicLab" target="_blank">Twitter.</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/cyanic_lab" target="_blank">Instagram.</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/cyaniclab/" target="_blank">LinkedIn.</a>
                                </li>
                            </ul>
                            <div className="additional_links display-block ">
                                <span>© 2022 Cyaniclab </span>
                            </div>
                        </div>
                        <div className="col-md-5 col-xs-12 ">
                            <ul className="footer_link">
                                <li><Link href="/"><a >Home </a></Link></li>
                                <li><Link href="/about"><a >About </a></Link></li>
                                <li><Link href="/service"><a >Services</a></Link></li>
                                <li><a target="_blank" href="https://calendly.com/jaskhatri/15min">Consultation</a></li>
                                <li><Link href="/contact-us"><a >Contact</a></Link></li>
                            </ul>
                            <ul className="footer_address">
                                <li>Address:- Central spine, Vidhyadhar Nagar, jaipur.</li>
                                <li><a href="mailto: jas@cyaniclab.com" >Email:- jas@cyaniclab.com, cyaniclab@gmail.com</a></li>
                                <li><a href="tel:918387969879">Call:- +91-8387969879</a></li>
                            </ul>
                            <div className="additional_links display-none ">
                                <span>© 2022 Cyaniclab </span>
                            </div>
                        </div>
                        <div className="col-md-7 col-xs-12 pr-4">
                            <a target="_blank" href="https://clutch.co/profile/cyanic-lab">
                                <div className="tr margin-top">
                                    <img className="pr-2" src="img/clutch.png" alt="clutch" />
                                    <div>
                                        <i className="clutch-star" ><FontAwesomeIcon icon={["fas", "star"]} height="15px" /></i>
                                        <i className="clutch-star" ><FontAwesomeIcon icon={["fas", "star"]} height="15px" /></i>
                                        <i className="clutch-star" ><FontAwesomeIcon icon={["fas", "star"]} height="15px" /></i>
                                        <i className="clutch-star" ><FontAwesomeIcon icon={["fas", "star"]} height="15px" /></i>
                                        <i className="clutch-star" ><FontAwesomeIcon icon={["fas", "star"]} height="15px" /></i>
                                        <p className="clutch-reviews">4 reviews</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}

export default Footer