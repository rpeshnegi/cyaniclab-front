import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
};

const useStyles = makeStyles(style);

const Service = ({ props, home }) => {
    const classes = useStyles();

    return <>
        {(home) && (
            <section className="p50 our_services">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-12 our_ser_h">
                            <h2 className="heading wow bounceInLeft animated" data-wow-duration="1s" data-wow-delay="0.2s">Our <br /><span>Services</span></h2>
                            <ul className="services-listing">
                                <li className="wow bounceInRight animated" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <span className="icon_img"><img src="img/uxui_design.png" /></span>
                                    <span>
                                        <h4>Web Design</h4>
                                        <p>We design beautiful websites that convert your leads into customers. Our
                                        UI/UX designers use the latest tools and technologies to create clean
                                        and modern interfaces that not only look good but also keep you ahead of
the competition.</p>
                                    </span>
                                </li>
                                <li className="wow bounceInRight animated" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <span className="icon_img"><img src="img/web_evelopment.png" /></span>
                                    <span>
                                        <h4>Web Development</h4>
                                        <p>In the digital world if you don’t have a website you're probably losing
                                        customers. The website we create for you will be optimised to assist you
                                        with selling your products and services. With one of our websites you
                                        will save time, increase revenues and enhance your business reputation.
Let us help you build your online presence.</p>
                                    </span>
                                </li>
                                <li className="wow bounceInRight animated" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <span className="icon_img"><img src="img/app_engineering.png" /></span>
                                    <span>
                                        <h4>Mobile App</h4>
                                        <p>If you want to grow your business, you'll need a custom mobile app. A
                                        mobile app provides your customers with an easily available experience,
                                        increases engagement, boosts sales, and will keep your brand on your
                                        customers’ phones at all times. Talk to us and share your idea for an
                                        app that works for your business - we will convert your idea into an app
that will fulfil both your company and your customers requirements.</p>
                                    </span>
                                </li>
                                <li className="wow bounceInRight animated" data-wow-duration="1s" data-wow-delay="0.8s">
                                    <span className="icon_img"><img src="img/web_evelopment.png" /></span>
                                    <span>
                                        <h4>Custom Software</h4>
                                        <p>Bring value to your business via custom software. We design and build
                                        custom software solutions that fit the needs of your business and
                                        employees, as well as your users and customers. Our software developers
                                        can help you turn your idea into a digital product and provide you with
high quality code.</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )}
        {(!home) && (
            <>
                <section className="banner_home">
                    <div className="container">
                        <h1 className="font-style" >We solve business problems<br /></h1>
                    </div>
                </section>
                <section className="services-section">
                    <div className="container">
                        <div className="heading-block"><h2 className="text-left">Our <span>Services</span></h2></div>
                        <div className="services-lesting">
                            <ul>
                                <li>
                                    <h2>UX/UI</h2>
                                    <p>Our UI/UX designers use the latest tools and technologies to create clean and modern interfaces that don’t only look good but also keep you ahead of the competition. We give neat designs and interactive pages that engage your audiences unfailingly.</p>
                                    <span>AdobeXD</span>
                                    <span>Sketch</span>
                                    <span>Photoshop</span>
                                    <span>Illustrator</span>
                                </li>
                                <li>
                                    <h2>Front End</h2>
                                    <p>Our front end developers use the latest technologies to build the visual part of your web or app. We build the front-end part of websites responsive that works on all screen sizes and devices. With an all-inclusive development approach, we keep your business one step ahead always.</p>
                                    <span>ReactJS</span>
                                    <span>Angular</span>
                                    <span>HTML/CSS</span>
                                    <span>Vue.JS</span>
                                    <span>JavaScript</span>
                                </li>
                                <li>
                                    <h2>Back End</h2>
                                    <p>Website and mobile apps both need a backend and the server-side. Our experienced team uses the latest technologies to build the backend part of your applications. When we work on this segment, we assure you that you get a robust and reliable framework.</p>
                                    <span>Node</span>
                                    <span>PHP</span>
                                    <span>Laravel</span>
                                    <span>Express</span>
                                </li>
                                <li>
                                    <h2>Mobile Development</h2>
                                    <p>A reliable Content Management System (CMS) is essential for every business today and we make more feasible and affordable for you. No matter what the size or nature of your business is, we give you a tailor-made platform that fulfills all your requirements in a seamless manner.</p>
                                    <span>ReactNative</span>
                                    <span>Flutter</span>
                                </li>
                                <li>
                                    <h2>CMS</h2>
                                    <p>A reliable Content Management System (CMS) is essential for every business today and we make more feasible and affordable for you. No matter what the size or nature of your business is, we give you a tailor-made platform that fulfills all your requirements in a seamless manner.</p>
                                    <span>WordPress</span>
                                    <span>Zoomla</span>
                                    <span>Magento</span>
                                </li>
                                <li>
                                    <h2>CRM</h2>
                                    <p>A Customer Relationship Management (CRM) system helps you manage the interactions of your clients. In the age of consumerism, this software is a boon to every business that caters directly to the customers. It helps you analyze, manage, and store the data in a very safe and efficient way.</p>
                                    <span>SuiteCRM</span>
                                    <span>Vtiger</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="solutions-section">
                    <div className="container">
                        <div className="heading-block"><h2 className="text-left">Our <span>Solutions</span></h2></div>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="solutions-media">
                                    <img className="w-100" src="img/sol-1.png" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="solutions-content">
                                    <div className="heading-block">
                                        <h2 className="text-left">Startups <span></span></h2>
                                    </div>
                                    <p>We help startups across the globe bring their products to life. We closely work with them to understand their business, problem, target audience, and based on that we design and develop the solutions that help them grow digitally. Our motto is to provide all the productive means that the budding businesses can use to become a frontrunner in their domains.
                                    <br /><br />
Do you have an idea for your startups and looking for a team to convert your idea into reality then you are at the right place. We have a team of experienced designers and developers who will work with you to convert your idea into digital solutions.
</p>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row-reverse align-items-center">
                            <div className="col-lg-5">
                                <div className="solutions-media">
                                    <img className="w-100" src="img/digital.png" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="solutions-content"><div className="heading-block">

                                    <h2 className="text-left">Digital and <span>Marketing Agencies</span></h2>
                                </div>
                                    <p>We work with digital and marketing agencies to help them in different types of projects like Web Design, Web Development, Mobile App Development, and Custom Solutions. When we build these programs, we ensure that they strike a chord with your customers and become a reason behind your success.
                                    <br /><br />
                                    If you are looking for help with your ongoing or upcoming projects then we can help you and provide you high quality and white-label services. We have experience in working with digital and marketing agencies in the USA, Europe, and Australia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="solutions-media">
                                    <img className="w-100" src="img/small.png" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="solutions-content"><div className="heading-block"><h2 className="text-left">Small <span>Businesses</span></h2></div>
                                    <p>We help small businesses to build an online presence for their business. It’s not about building an online presence, it’s about selling your services or products online. You don’t need to invest your money in the physical store or infrastructure. You just need a great idea, unique products, and a good website. We make it possible with a feasible approach that addresses issues your venture could face and provide you befitting solutions as well.
                                    <br /><br />
Are you looking to build an online presence for your business? Let’s connect with us to know how we can help you.
</p>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row-reverse align-items-center">
                            <div className="col-lg-5">
                                <div className="solutions-media">
                                    <img className="w-100" src="img/large.png" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="solutions-content"><div className="heading-block"><h2 className="text-left">Large <span>Businesses</span></h2></div>
                                    <p>When it comes to serving large-scale businesses, we understand their need to expand and diversify the operations. We help them with insightful research and enable them to meet their goals. We keep in mind that different businesses have different ambitions and we treat each enterprise as a unique entity. With our strategic project handling and management techniques, it is possible for every big firm to get bigger. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="container">
                        <h2 className="heading mb-5 color_man tc wow fadeInUp"> Our <span>Process</span></h2>
                        <div className="process">
                            <ul>
                                <li>
                                    <div className="contetn-div-prcess">
                                        <div className="icon-div">
                                            <FontAwesomeIcon icon={["fas", "lightbulb"]} height="50px" />
                                        </div>
                                        <div className="inner-content">
                                            <span>01</span>
                                            <div className="inner-text-div">
                                                <h2>Idea</h2>
                                            </div>
                                            <p>Understand your idea, target audience, and the problem you want to solve.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contetn-div-prcess">
                                        <div className="icon-div">
                                            <FontAwesomeIcon icon={["fas", "bezier-curve"]} height="50px" />
                                        </div>
                                        <div className="inner-content">
                                            <span>02</span>
                                            <div className="inner-text-div">
                                                <h2>Design</h2>
                                            </div>
                                            <p>Design UI/Ux that engages your target audience.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contetn-div-prcess">
                                        <div className="icon-div">
                                            <FontAwesomeIcon icon={["fas", "file-code"]} height="50px" />
                                        </div>
                                        <div className="inner-content">
                                            <span>03</span>
                                            <div className="inner-text-div">
                                                <h2>Development</h2>
                                            </div>
                                            <p>Develop platform that achive your idea and develop your business.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contetn-div-prcess">
                                        <div className="icon-div">
                                            <FontAwesomeIcon icon={["fas", "rocket"]} height="50px" />
                                        </div>
                                        <div className="inner-content">
                                            <span>04</span>
                                            <div className="inner-text-div">
                                                <h2>Launch</h2>
                                            </div>
                                            <p>Lanuch your idea with all quality assurance.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )}
        {/* <Grid container className={classes.serviceSection}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom> Our Services </Typography>
            </Grid>
            <Grid item xs={12}>
                <div className="service-details">
                    <ul>
                        {services.map((item, index) => (
                            <motion.div key={index}>
                                <li>
                                    <img src={item.img} />
                                    <div className="service-heading">
                                        <h4>{item.title}</h4>
                                        <p style={{ display: (item.style.display) }}>{item.description}</p>
                                    </div>

                                </li>
                            </motion.div>
                        ))}
                    </ul>
                </div>
            </Grid>
        </Grid> */}
    </>;
}

export default Service