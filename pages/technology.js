import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
    root: {
        position: 'relative',
        zIndex: ' 5',
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#fff',
        paddingtop: '100px',
        paddingBottom: '100px',
        '& h2': {
            textAlign: 'center',
            fontSize: '50px',
            color: '#ffc600',
        }
    },
};

const useStyles = makeStyles(style);

const Technology = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Box className={classes.root}>
            <h2 className="text-center " > Technologies</h2>
            <Grid container >
                <Grid item xs={2}>
                    <div className="technologies_box">
                        <FontAwesomeIcon icon={["fab", "angular"]} size="6x" />
                        <h5>Angular</h5>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="technologies_box">
                    <FontAwesomeIcon icon={["fab", "laravel"]} size="6x" />
                        <h5>Laravel</h5>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="technologies_box">
                    <FontAwesomeIcon icon={["fab", "node"]} size="6x" />
                        <h5>Node Js</h5>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="technologies_box">
                    <FontAwesomeIcon icon={["fab", "react"]} size="6x" />
                        <h5>React Js</h5>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="technologies_box">
                    <FontAwesomeIcon icon={["fab", "angular"]} size="6x" />
                        <h5 >React Native</h5>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="technologies_box">
                    <FontAwesomeIcon icon={["fab", "php"]} size="6x" />
                        <h5 >PHP</h5>
                    </div>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Technology