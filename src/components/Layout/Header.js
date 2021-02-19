
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { motion, useCycle } from "framer-motion";
//import Image from 'next/image'

import React, { useEffect, useRef, useState } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Navigation } from './Navigation';
// import { useSelector } from 'react-redux';
import Link from 'next/link'

const style = {
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
        clipPath: "circle(0px at 0px 0px)",
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
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(/iPhone|Android/i.test(navigator.userAgent));
        const handleRouteChange = (url) => {
            toggleOpen(0)
        }
        router.events.on('routeChangeStart', handleRouteChange)
    }, [])

    const toggleSideBar = () => {
        toggleOpen()

        setTimeout(() => isOpen ? document.body.classList.remove('disbaled-scroll') : document.body.classList.add('disbaled-scroll'), 500)

    }

    return <>
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom="400"
            ref={containerRef}
        >
            <motion.div className={classes.background} variants={sidebar} />
            <Navigation isOpen={isOpen} toggle={() => toggleSideBar()} />
        </motion.div>
        <header >
            <div className="top_bar">
                <div className="container-fluid">
                    <div className="top-menu text-center">
                        <span className="float-left menu_btn" onClick={toggleSideBar}><span></span><span></span><span></span></span>
                        <div className="logo"><Link href="/"><img src="img/logo.png" alt="logo" /></Link></div>
                        {!isMobile && <Link href="/contact-us"><a className="float-right btn">Grow your business</a></Link>}
                    </div>
                </div>
            </div>
        </header>
        {/* <Box className={classes.fullFluid}>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom="400"
                ref={containerRef}
            >
                <motion.div className={classes.background} variants={sidebar} />
                <Navigation />
                <MenuToggle toggle={() => toggleSideBar()} />
            </motion.nav>
            <Box className={classes.topLogo} >
                <img className={classes.logoImg} src="img/logo.png" alt="" />
            </Box>
            <CyanicButton className={classes.ButtonRight} color="primary" variant="contained" text='Frow your Buisness' />
        </Box> */}

    </>;
}

export default Header