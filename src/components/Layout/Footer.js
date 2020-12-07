import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
// import { useSelector } from 'react-redux';

const style = {
    footer: {
        padding: '100px 0 60px',
        fontSize: '13px',
        position: 'relative',
        zIndex: 5,
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#fff',
        paddingTop: '100px',
        paddingBottom: '60px',
        '& li': {
            '& a': {
                color: '#fff'
            }
        },
        '& .additional_links': {
            marginTop: '35px'
        },
        '& .footer_link': {
            marginBottom: '20px',
            '& li': {
                display: 'inline-block',
                margin: '0 20px 10px 0'
            }
        },
        '& .footer_address': {
            '& li': {
                display: 'block',
                margin: '0 00px 10px 0'
            }
        },
        '& .tr': {
            textAlign: 'right'
        }
    },
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
            margin: '50px 0 120px',
        }
    },
    tch5: {
        fontSize: '90px'
    },
    social_linkLi: {
        display: 'inlineBlock',
        marginRight: '30px',
        fontSize: '13px'
    }
};

const useStyles = makeStyles(style);

const Footer = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Grid className={classes.footer}>
            <div className={classes.tc}>
                <h5 className={classes.tch5}>Lets talk about<br /> business</h5>
                <a href="#">Send message</a>
            </div>
            <div className="row">
                <Grid item xs={7}>

                    <img className="mb-4 " src="img/logo.png" alt="logo" />
                    <ul className="social_link">
                        <li>
                            <a href="#" target="_blank">Facebook.</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Twitter.</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Instagram.</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">LinkedIn.</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Dribbble.</a>
                        </li>

                    </ul>
                    <div className="additional_links ">
                        <span className="wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.6s">© 2020 Cyaniclab </span>
                    </div>

                    <div className="tr ">
                        <img className=" " src="img/clutch.png" alt="clutch" />
                    </div>
                </Grid>

                <Grid item xs={5}>

                    <ul className="footer_link">

                        <li><a href="#">About      </a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Technologies </a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>



                    <ul className="footer_address">
                        <li>Address:- Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Email:- info@cyaniclab.com</li>
                        <li>Call:- +91-987654321</li>

                    </ul>
                </Grid>
            </div>

        </Grid>
    </>;
}

export default Footer