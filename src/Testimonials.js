import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MotionSlider } from './components/MotionSlider';

const style = {
};

const useStyles = makeStyles(style);
const reviews = [
    {
        id: 0,
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos, et repudiandae quas hic inventore quisquam quis vitae, excepturi labore laudantium laboriosam veritatis optio illo minima voluptatum pariatur iure esse, voluptatibus ut explicabo est similique molestias.",
        name: "Elsa Porter"
    },
    {
        id: 1,
        text:
            "Fugit quibusdam veniam illum iure sunt quisquam necessitatibus sequi excepturi minima harum qui aliquid, modi voluptatibus expedita quasi illo! Numquam provident, vero saepe soluta officia beatae ducimus est ut dolorem atque aperiam non suscipit voluptatem?",
        name: "John Smith"
    },
    {
        id: 2,
        text:
            "Ut eius omnis rerum harum beatae ullam commodi quam quasi aperiam veniam quae esse corporis, fuga quis, animi asperiores similique nobis maiores molestias dolore ipsam. Omnis sunt iusto quasi.",
        name: "Scarlett Light"
    }
];


const Testimonials = ({ props, dispatch }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return <>
        <section className="clients pb-5" >
            <div className="container-fluid">
                <h2 className="heading mb-5 color_man tc wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.6s">What our <span> client says</span></h2>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    {/* <!-- <ul className="carousel-indicators">
                                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo" data-slide-to="1"><img src="img/user2.jpg" /></li>
                                        <li data-target="#demo" data-slide-to="2"><img src="img/user3.jpg" /></li>
                                    </ul> --> */}
                    {/* <!-- The slideshow --> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="kc_tab_content">
                                <div className="usr-img"><img src="img/mpeet.jfif" /></div>
                                <p>They were very professional, willing to listen, good command of English, and committed to completing the job.</p>
                                <h6>Martin Peet</h6>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="kc_tab_content">
                                <div className="usr-img"><img src="img/rnunz.jfif" /></div>
                                <p>They are professional, good listeners, and offer good comments about requests, and committed to finishing the project.</p>
                                <h6>Robinson Nunez</h6>
                            </div>
                        </div>
                        {/* <div className="carousel-item">
                            <div className="kc_tab_content">
                                <div className="usr-img"><img src="img/user1.jpg" /></div>
                                <p>Can say about these guys only good words! Well tested product was provided as well as 24/7 support and maintenance. After 2 months of designing on this theme, my rating could not be less than 5 stars.</p>
                                <h6>client Name</h6>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <MotionSlider content={reviews} /> */}
        </section>
    </>;
}

export default Testimonials