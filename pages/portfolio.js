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
        <section className=" statement tc">
            <div className="container-fluid">
                <div className="row display-none">
                    <div className="col-md-5 text-center  wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div className="heading-block">
                            <h2> Our <span>Work</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div class="col-md-5">
                        <div class="row ">
                            <div className="col-md-12  wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s" >
                                <div className="work_box">
                                    <div className="wok-images-box">
                                        <img className="img-fluid" src="img/work1.jpg" />
                                        <div className="plus-div"><a href="#"><i className="fa fa-plus"></i></a></div>
                                    </div>
                                    <div className="work_box_in">
                                        <span>UX Conception</span><span>Interface Design</span><span>Web Frontend Development</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12  wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s" >
                                <div className="work_box work_box_margan">
                                    <div className="wok-images-box">
                                        <img className="img-fluid" src="img/work2.jpg" />
                                        <div className="plus-div"><a href="#"><i className="fa fa-plus"></i></a></div>
                                    </div>
                                    <div className="work_box_in">
                                        <span>UX Conception</span><span>Interface Design</span><span>Web Frontend Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"> </div>

                    <div class="col-md-5">
                        <div class="row">
                            <div className="col-md-12  wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s" >
                                <div className="heading-block display-block">
                                    <h2> Our <span>Work</span></h2>
                                </div>
                                <div className="work_box">
                                    <div className="wok-images-box">
                                        <img className="img-fluid" src="img/work2.jpg" />
                                        <div className="plus-div"><a href="#"><i className="fa fa-plus"></i></a></div>
                                    </div>
                                    <div className="work_box_in">
                                        <span>UX Conception</span><span>Interface Design</span><span>Web Frontend Development</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12  wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s" >
                                <div className="work_box work_box_margan">
                                    <div className="wok-images-box">
                                        <img className="img-fluid" src="img/work1.jpg" />
                                        <div className="plus-div"><a href="#"><i className="fa fa-plus"></i></a></div>
                                    </div>
                                    <div className="work_box_in">
                                        <span>UX Conception</span><span>Interface Design</span><span>Web Frontend Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default Portfolio