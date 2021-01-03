import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { motion, useCycle } from "framer-motion";

const style = {
    serviceSection: {
        minHeight: '100vh',
        position: 'relative',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        maxWidth: '1200px',
        margin: '0 auto',
        '& div': {
            position: 'relative',
            zIndex: 4,
            color: '#fff',
        },
        '& .service-details ul': {
            width: '100%',
            padding: '0px',
            position: 'static',
            '& li': {
                display: 'flex',
                '& img': {
                    height: '72px',
                    width: 'auto',
                    marginRight: '10px'
                },
                '& p': {
                    marginTop:'0px'
                }
            }
        }
    }
};

const useStyles = makeStyles(style);

const Service = ({ props, dispatch }) => {
    const classes = useStyles();
    const services = [
        {
            title: 'UX/UI Design',
            img: 'img/uxui_design.png',
            description: "Anything from a simple portfolio website to a fintech platform, you name it, we’ve done it. We can deliver what you need faster than you can say „Oachkatzalschwoaf“ (to save you the trouble of googling it:",
            style: { display: 'block' }
        },
        {
            title: 'Web Developmen',
            img: 'img/web_evelopment.png',
            description: "Anything from a simple portfolio website to a fintech platform, you name it, we’ve done it. We can deliver what you need faster than you can say „Oachkatzalschwoaf“ (to save you the trouble of googling it:",
            style: { display: 'block' }
        },
        {
            title: 'App Engineering',
            img: 'img/app_engineering.png',
            description: "Anything from a simple portfolio website to a fintech platform, you name it, we’ve done it. We can deliver what you need faster than you can say „Oachkatzalschwoaf“ (to save you the trouble of googling it:",
            style: { display: 'block' }
        },
        {
            title: 'Growth Marketing',
            img: 'img/growth_marketing.png',
            description: "Anything from a simple portfolio website to a fintech platform, you name it, we’ve done it. We can deliver what you need faster than you can say „Oachkatzalschwoaf“ (to save you the trouble of googling it:)",
            style: { display: 'block' }
        }
    ]

    return <>
        <Grid container className={classes.serviceSection}>
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
        </Grid>
    </>;
}

export default Service