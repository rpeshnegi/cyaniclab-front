import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from '@material-ui/core';
// import { useSelector } from 'react-redux';

const style = {
    backdrop: {
        zIndex: 5,
        color: '#fff',
    },
};

const useStyles = makeStyles(style);

const WorkGlobaly = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>We Work Globally</Typography>
                <p>usa, germy more...</p>
                {/* <MotionSlider content={reviews} /> */}
            </Grid>
        </Grid>
    </>;
}

export default WorkGlobaly