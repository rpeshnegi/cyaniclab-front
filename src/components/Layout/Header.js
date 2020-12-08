
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { motion, useCycle } from "framer-motion";
//import Image from 'next/image'

import React, { useEffect, useRef } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from 'next/router';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Navigation } from './Navigation';
import { MenuToggle } from './MenuToggle';
import CyanicButton from '../Button';
// import { useSelector } from 'react-redux';

const style = {
    backdrop: {
        zIndex: 5,
        color: '#fff',
    },
    title: {
        color: 'white',
        fontFamily: 'Poppins,sans-serif',
    },
    lefttogglemenu: {
        zIndex: 6,
        cursor: 'pointer',
    },
    ButtonRight: {
        position: 'absolute',
        right: '45px',
        top: '45px',
        borderRadius: '45px',
        background: '#ffc600',
        zIndex: 6,

    },
    topLogo: {
        textAlign: 'center',
        position: 'absolute',
        zIndex: 5,
        left: '0px',
        right: '0px',
        top: '10px',
        margin: '0 100px',
    },

    logoImg: {
        cursor: 'pointer',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        background: 'black'
    },
    fullFluid: {
        '& ul, li': {
            margin: '0',
            padding: '0',
        },
        '& ul': {
            padding: '25px',
            position: 'absolute',
            top: '100px',
            width: '230px'
        },
        '& li': {
            listStyle: 'none',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
        }
    },
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const useStyles = makeStyles(style);

const Header = ({ props, dispatch }) => {
    const classes = useStyles();
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            toggleOpen(0)
        }
        router.events.on('routeChangeStart', handleRouteChange)
    }, [])

    return <>
        <Container className={classes.fullFluid}>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom="400"
                ref={containerRef}
            >
                <motion.div className={classes.background} variants={sidebar} />
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
            <Box className={classes.topLogo} > <img className={classes.logoImg} src="img/logo.png" alt="" /> </Box>
            <CyanicButton className={classes.ButtonRight} color="primary" variant="contained" text='Frow your Buisness' />
        </Container>

    </>;
}

export default Header