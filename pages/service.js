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

const Service = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Box>Service</Box>
    </>;
}

export default Service