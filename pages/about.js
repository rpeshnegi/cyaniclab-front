import React from 'react';

export default function About() {
    return (
        <>
            <section className="banner_home">
                <div className="container">
                    <h1 className="font-style" >We design and build web and mobile solutions.
                    {/* <br /> That Develop Your<br /> Business */}
                    </h1>
                </div>
            </section>
            <section className="about-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <h2 className="heading">About <span>Us</span></h2>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-content">
                                <p>Cyanic Lab is a reliable Digital Agency that solves problems and delivers quality solutions. We help startups, small- and mid-level companies grow their business via Digital Solutions focusing on Web Development, Mobile App Development, Custom Software, UX/UI design. We always believe in building long-term relationships with our clients.
                                <br /><br />
                                We have experience in working within business domains such as Ecommerce, Healthcare, Education, Fitness, Food & Beverage, Travel & Hospitality. We provide innovative solutions for businesses and startups everywhere around the globe: the USA, Canada, Europe, and Australia.
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section">
                <div className="container">
                    <div className="row flex-row-reverse justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-12">
                            <div className="heading-block">
                                <h2>Meet <span>Our Team</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-images"><img src="img/team-1.png" /></div>
                                <div className="team-content"><span>Jas Khatri</span><span>Chief visionary officer</span></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-images"><img src="img/team-1.png" /></div>
                                <div className="team-content"><span>Jas Khatri</span><span>Chief visionary officer</span></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-images"><img src="img/team-1.png" /></div>
                                <div className="team-content"><span>Jas Khatri</span><span>Chief visionary officer</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-values-section">
                <div className="container text-left">
                    <div className="heading-block"><h2 className="text-left">Our <span>Values</span></h2></div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="over-values-item">
                                <div className="over-values-icon">01</div>
                                <div className="over-values-content">
                                    <div className="over-values-title">Transparency</div>
                                    When we provide a service, we make sure that you understand what we are doing and how we are making it possible. </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="over-values-item">
                                <div className="over-values-icon">02</div>
                                <div className="over-values-content">
                                    <div className="over-values-title">On-Time</div>
                                    We also make certain that you get the job done when you want it. The way we handle projects makes this possible. </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="over-values-item">
                                <div className="over-values-icon">03</div>
                                <div className="over-values-content">
                                    <div className="over-values-title">High Quality</div>
                                No matter what service or solution you are looking for. We make it totally perfect and productive for your business. </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="over-values-item pb-0">
                                <div className="over-values-icon">04</div>
                                <div className="over-values-content">
                                    <div className="over-values-title">Work tirelessly until the goal is reached</div>
                                We work with relentless conviction at every front and deliver results anyhow. We leave no stone unturned in delivering what you want. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}