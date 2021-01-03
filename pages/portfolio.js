import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .work_box': {
            marginBottom: '50px',
            overflow: 'hidden',
            borderRadius: '1px',
            position: 'relative',
            '& .img-fluid': {
                maxWidth: '100%',
                height: 'auto',
            }
        },
        '& .work_box_margan': {
            marginTop: '50px'
        }
    }
}));


const Portfolio = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom> Work</Typography>
            </Grid>

            <Grid item xs={6}>
                <div className="work_box work_box_margan">
                    <img className="img-fluid" src="img/work2.jpg" />
                    <div className="work_box_in">
                        UX Conception<br />
                                                        Interface Design<br />
                                                            Web Frontend Development
                                </div>
                </div>
            </Grid>

            <Grid item xs={1}>&nbsp;</Grid>

            <Grid item xs={5}>
                <div className="work_box">
                    <img className="img-fluid" src="img/work2.jpg" />
                    <div className="work_box_in">
                        UX Conception<br />
                                                        Interface Design<br />
                                                            Web Frontend Development
                                </div>
                </div>
            </Grid>

            <Grid item xs={5}>
                <div className="work_box work_box_margan">
                    <img className="img-fluid" src="img/work2.jpg" />
                    <div className="work_box_in">
                        UX Conception<br />
                                                                    Interface Design<br />
                                                                        Web Frontend Development
                                </div>
                </div>
            </Grid>

            <Grid item xs={1}>&nbsp;</Grid>
            <Grid item xs={6}>
                <div className="work_box ">
                    <img className="img-fluid" src="img/work1.jpg" />
                    <div className="work_box_in">
                        UX Conception<br />
                                                                                Interface Design<br />
                                                                                    Web Frontend Development
                                </div>
                </div>
            </Grid>
        </Grid>
    </>;
}

export default Portfolio