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
        text: "Cyanic Lab handled to deliver the platform despite the nature of prototyping. The team communicated well and was flexible meetings. They were collaborative, and their decent code quality was impressive in the workflow.",
        name: "Eric Heung (CTO, Chartipedia)",
        img: "img/user-placeholder.png"
    },
    {
        id: 1,
        text: "Jas, Thank you for your work, you are very helpful and it was a pleasure to cooperate! I hope that we can collaborate again soon on something else :)",
        name: "Sofia Rrighetti (Company Owner)",
        img: "img/Risorsa-27.webp"
    },
    {
        id: 2,
        text: "After our first week, it's been easy to find trust in this company.",
        name: "Benjamin Sernji (CEO & CTO, Digital Generalist OÜ)",
        img: "img/ben.jpeg"
    },
    {
        id: 3,
        text:
            "They were very professional, willing to listen, good command of English, and committed to completing the job.",
        name: "Martin Peet (Owner Business Fundamentals)",
        img: "img/mpeet.jfif"
    },
    {
        id: 4,
        text:
            "They are professional, good listeners, and offer good comments about requests, and committed to finishing the project.",
        name: "Robinson Nunez (VP of Product Development, Bostel Communication)",
        img: "img/rnunz.jfif"
    },
    // ashok add
    {
        id: 5,
        text:
            "Review: Cyanic Lab is a very reliable partner — they've proven capable of providing the right solutions to problems in a timely manner. What's more, they've been proactive in coming up with their own ideas and asking for feedback. The team is also flexible, optimistic, and organized.",
        name: "Robin Henriksson(Founder, Website)",
        img: "img/user-placeholder.png"
    },
    {
        id: 6,
        text:
            "Review: They demonstrate excellent communication and programming skills.",
        name: " Ville Rontti(Chief, CEO) ",
        img: "img/user-placeholder.png"
    }
    //end  ashok add
];


const Testimonials = ({ props, dispatch }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return <>
        <section className="p50 clients" >
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
                        <MotionSlider content={reviews} />
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default Testimonials