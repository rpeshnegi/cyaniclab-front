import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));


const Portfolio = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Box>
            <div className="container technologies-section">
                <h2 className="text-center " data-wow-duration="2s" data-wow-delay="0.6s"> Work</h2>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className="col-md-5 col-sm-6 wow fadeInUp animated animated" data-wow-duration="2s" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDuration: '2s', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                            <div className="work_box work_box_margan">
                                <img className="img-fluid" src="img/work2.jpg" />
                                <div className="work_box_in">
                                    UX Conception<br />
                                                        Interface Design<br />
                                                            Web Frontend Development
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <div className="row justify-content-md-center">

                    
                    <div className="col-md-1"> </div>
                    <div className="col-md-5 col-sm-6 wow fadeInUp animated animated" data-wow-duration="2s" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDuration: '2s', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                        <div className="work_box work_box_margan">
                            <img className="img-fluid" src="img/work2.jpg" />
                            <div className="work_box_in">
                                UX Conception<br />
                                                        Interface Design<br />
                                                            Web Frontend Development
                                </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-6 wow fadeInUp animated animated" data-wow-duration="2s" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDuration: '2s', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                        <div className="work_box">
                            <img className="img-fluid" src="img/work2.jpg" />
                            <div className="work_box_in">
                                UX Conception<br />
                                                                    Interface Design<br />
                                                                        Web Frontend Development
                                </div>
                        </div>
                    </div>
                    <div className="col-md-1"> </div>
                    <div className="col-md-5 col-sm-6 wow fadeInUp animated animated" data-wow-duration="2s" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDuration: '2s', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                        <div className="work_box work_box_margan">
                            <img className="img-fluid" src="img/work1.jpg" />
                            <div className="work_box_in">
                                UX Conception<br />
                                                                                Interface Design<br />
                                                                                    Web Frontend Development
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    </>;
}

export default Portfolio