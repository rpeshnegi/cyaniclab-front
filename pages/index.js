import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Service from './service';
import Technology from './technology';
import Portfolio from './portfolio';
import WorkGlobaly from '../src/WorkGlobaly';
import Testimonials from './../src/Testimonials';
import LetsTalk from '../src/LetsTalk';
import { Grid, makeStyles } from '@material-ui/core';

const style = {
    bannerCaption: {
        minHeight: '100vh',
        position: 'relative',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& h1': {
            fontWeight: '800',
            color: '#fff',
            // fontSize: '100px',
            textAlign: 'left',
        },
        '& ul': {
            margin: '50px 0 0 0',
            padding: '0px 0px',
            position: 'static',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        },
        '& ul li': {
            display: 'flex',
            flexDirection: 'column',
        },
        '& ul li strong': {
            fontSize: '70px',
            color: '#ffcb15',
            lineHeight: 1,
        },
        '& ul li p': {
            fontSize: '20px',
            color: '#fff',
            margin: '0px',
            padding: '0px',
        }
    }
};

const useStyles = makeStyles(style);

export default function Index() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.bannerCaption}>
                <Grid container >
                    <Grid item xs={9}>
                        <Typography variant="h1">
                            Helping businesses and startups grow via Digital Solutions
                        </Typography>

                    </Grid>
                    <Grid item xs={3}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={12}>
                        <ul>
                            <li> <strong> 7+</strong> <p> Figures In Revenue Generated </p> </li>
                            <li> <strong> 7+</strong> <p> Projects Closed  </p> </li>
                            <li> <strong> 7+</strong> <p> US Cities, & Growing  </p> </li>

                        </ul>
                    </Grid>
                </Grid>
            </div>
            <Service />
            <Technology />
            <Portfolio />
            <ProTip />
            <WorkGlobaly />
            <Testimonials />
            <LetsTalk />
            <Copyright />
        </>
    );
}