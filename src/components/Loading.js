import React, { useEffect, useState } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from 'next/router';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { useSelector } from 'react-redux';

const style = {
    backdrop: {
        zIndex: 5,
        color: '#fff',
    },
};

const useStyles = makeStyles(style);

const Loading = ({ props, dispatch }) => {
    const classes = useStyles();

    const router = useRouter();
    // const { loader } = useSelector(state => state);
    const [loading, setLoading] = useState(true);

    const handleStart = (url) => {
        return (url !== router.pathname) && setLoading(true)
    };
    // handleComplete event was not firing
    const handleComplete = (url) => {
        return (url === router.pathname) && setLoading(false)
    };

    useEffect(() => {
        setLoading(false)
        // router.events.on('routeChangeStart', handleStart)
        // router.events.on('routeChangeComplete', handleComplete)
        // router.events.on('routeChangeError', handleComplete)
        // return () => {
        //     router.events.off('routeChangeStart', handleStart)
        //     router.events.off('routeChangeComplete', handleComplete)
        //     router.events.off('routeChangeError', handleComplete)
        // }
    })

    return <>
        <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
        {/* <div data-test={loader}></div> */}
    </>;
}

export default Loading