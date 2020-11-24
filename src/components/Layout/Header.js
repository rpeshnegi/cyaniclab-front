
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//import Image from 'next/image'

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
title:{ 
     color:'white',
     fontFamily: 'Poppins,sans-serif'   ,
},
lefttogglemenu:{   
     zIndex:6,
     cursor:'pointer',
},
ButtonRight:{ 
    position:'absolute',
    right:'45px',
    top:'45px',
    borderRadius:'45px',
    background:'#ffc600',
    zIndex:6,
   
},
topLogo:{ 
    textAlign:'center',
    position:'absolute',
    zIndex:5,
    left:'0px',
    right:'0px',
    top:'45px',
    margin:'0 100px',
},

logoImg:{  cursor:'pointer',
},



};

const useStyles = makeStyles(style);

const Header = ({ props, dispatch }) => {
    const classes = useStyles();

    useEffect(() => {
     
    })

    return <>
          <Container maxWidth="fluid">
             <Box  className={classes.lefttogglemenu} position="absolute" top={45} > <img   src="img/togglemenu.png" alt=""/> </Box> 
             <Box  className={classes.topLogo} > <img  className={classes.logoImg} src="img/logo.png" alt=""/> </Box>
              <Button  className={classes.ButtonRight} color="primary" variant="contained">Grow your business</Button> 
      </Container>
      
    </>;
}

export default Header