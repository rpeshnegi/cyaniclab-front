import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Service from './service';
import Technology from './technology';
import Portfolio from './portfolio';
import WorkGlobaly from '../src/WorkGlobaly';
import Testimonials from './../src/Testimonials';
import { Grid, makeStyles } from '@material-ui/core';
import { DragSlider } from '../src/components/motions/DragSlider';

const style = {

};

const useStyles = makeStyles(style);

export default function Index() {
    const classes = useStyles();
    return (
        <>
            <section className="banner_home">
                <div className="container-fluid">
                    <h1 className="mymove " >Helping businesses and startups grow via Digital Solutions
                        {/* <br /> That Develop Your<br /> Business */}
                    </h1>
                </div>
            </section>
            {/* <DragSlider/> */}
            <Service home={true} />
            <Technology />
            <Portfolio />
            {/* <WorkGlobaly /> */}
            <Testimonials />
            <section className="customers p50" >
                <div className="container-fluid">
                    <h2 className="heading color_man mb-5 tc wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.6s">Customers</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-2 col-sm-3 col-6">
                            <img className="img-fluid" src="img/customers.png" />
                        </div>
                        <div className="col-md-2 col-sm-3 col-6">
                            <img className="img-fluid" src="img/customers2.png" />
                        </div>
                        <div className="col-md-2 col-sm-3 col-6">
                            <img className="img-fluid" src="img/customers.png" />
                        </div>
                        <div className="col-md-2 col-sm-3 col-6">
                            <img className="img-fluid" src="img/customers2.png" />
                        </div>
                        <div className="col-md-2 col-sm-3 col-6">
                            <img className="img-fluid" src="img/customers.png" />
                        </div>
                        <div className="col-md-2 col-sm-3 col-6">
                            <img className="img-fluid" src="img/customers2.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}