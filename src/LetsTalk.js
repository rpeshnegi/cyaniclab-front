import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
// import { useSelector } from 'react-redux';

const style = {
    tc: {
        textAlign: 'center',
        '& a': {
            color: '#000',
            background: '#ffc600',
            fontSize: '17px',
            padding: '12px 35px',
            borderRadius: '25px',
            textTransform: 'uppercase',
            fontWeight: '500',
            display: 'inline-block',
            margin: '0px 0 120px',
        }
    },
    tch5: {
        fontSize: '90px'
    },
};

const useStyles = makeStyles(style);

const LetsTalk = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Box>
            <div className={classes.tc}>
                <h5 className={classes.tch5}>Lets talk about<br /> business</h5>
                <a href="#">Send message</a>
            </div>
        </Box>
    </>;
}

export default LetsTalk