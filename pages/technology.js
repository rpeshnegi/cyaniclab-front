import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
// import { useSelector } from 'react-redux';

const style = {
    backdrop: {
        zIndex: 5,
        color: '#fff',
    },
};

const useStyles = makeStyles(style);

const Technology = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Box>
            <div className="container technologies-section">
                <h2 className="text-center " data-wow-duration="2s" data-wow-delay="0.6s"> Technologies
</h2>
                <div className="row coloumn-5 align-items-center ">
                    <div className="col-md-3 col-sm-4 ">
                        <div className="technologies_box">
                            <img src="img/angular.png" />
                            <h5>Angular</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 ">
                        <div className="technologies_box">
                            <img src="img/laravel.png" />
                            <h5>Laravel</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 ">
                        <div className="technologies_box">
                            <img src="img/node.png" />
                            <h5>Node Js</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 ">
                        <div className="technologies_box">
                            <img src="img/react.png" />
                            <h5>React Js</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 ">
                        <div className="technologies_box">
                            <img src="img/react_native.png" />
                            <h5 >React Native</h5>
                        </div>
                    </div>



                </div>
            </div>

        </Box>
    </>;
}

export default Technology