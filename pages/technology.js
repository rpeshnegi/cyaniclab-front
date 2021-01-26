import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
};

const useStyles = makeStyles(style);

const Technology = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <section className="p50 technologies">
            <div className="container-fluid">
                <h2 className="heading mb-5 color_man tc wow fadeInUp"> Our <span>Technologies</span></h2>
                <div className="row wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.6s">
                    <div className="col-md-3 col-sm-4 col-6 ">
                        <div className="technologies_box">
                            <FontAwesomeIcon icon={["fab", "angular"]} height="90px" />
                            <h5>Angular</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 ">
                        <div className="technologies_box">
                            <FontAwesomeIcon icon={["fab", "laravel"]} height="90px" />
                            <h5>Laravel</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 ">
                        <div className="technologies_box">
                            <FontAwesomeIcon icon={["fab", "node"]} height="90px" />
                            <h5>Node Js</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 ">
                        <div className="technologies_box">
                            <FontAwesomeIcon icon={["fab", "react"]} height="90px" />
                            <h5>React Js</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 ">
                        <div className="technologies_box">
                            <FontAwesomeIcon icon={["fab", "php"]} height="90px" />
                            <h5 >PHP</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default Technology