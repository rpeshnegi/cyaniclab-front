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
            {/* <Portfolio /> */}
            {/* <WorkGlobaly /> */}
            <Testimonials />
            <section className="customers p50" >
                <div className="container-fluid">
                    <h2 className="heading color_man mb-5 tc wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.6s">Customers</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-3 col-6 p-3">
                            <img className="img-fluid customor-logo" src="img/Bostellogolg.png" />
                        </div>
                        <div className="col-md-3 col-sm-3 col-6 p-3">
                            <img className="img-fluid customor-logo" src="img/newtron.jpeg" />
                        </div>
                        <div className="col-md-3 col-sm-3 col-6 p-3">
                            <img className="img-fluid customor-logo" src="img/qno.png" />
                        </div>
                        <div className="col-md-3 col-sm-3 col-6 pt-3 pb-3 pl-0">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300px" height="90px" viewBox="0 0 300 90" enableBackground="new 0 0 300 90" >
                                <g>
                                    <path fill="#FFFFFF" d="M20.505,73.903l-3.653,3.652H6.685l-3.653-3.652V34.935l3.653-3.653h10.167l3.653,3.653V73.903z
														M10.095,36.275l-1.219,1.217v33.854l1.219,1.218h3.347l1.219-1.218V37.492l-1.219-1.217H10.095z"></path>
                                    <path fill="#FFFFFF" d="M44.797,77.556l-3.167-38.967l-3.164,38.967h-8.159l-5.906-46.273h6.089l3.47,40.001l4.08-40.001h7.307
														l4.077,40.001l3.47-40.001h5.723l-5.904,46.273H44.797z"></path>
                                    <path fill="#FFFFFF" d="M62.697,31.282h6.333l6.697,32.088V31.282h5.296v46.273H74.69l-6.697-31.599v31.599h-5.296V31.282z"></path>
                                    <path fill="#FFFFFF" d="M86.563,31.282h14.43v4.993h-8.583V51.62h7.487v4.99h-7.487v15.953h8.706v4.992H86.563V31.282z"></path>
                                    <path fill="#FFFFFF" d="M105.742,31.282h13.514l3.653,3.653v19.242l-3.227,3.227l3.653,20.152h-5.661l-3.593-19.727h-2.496v19.727
														h-5.844V31.282z M117.065,51.863V37.371l-1.217-1.217h-4.263V53.08h4.263L117.065,51.863z"></path>
                                </g>
                                <path fill="#FFFFFF" d="M148.513,77.556l-4.566-36.288v36.288h-5.297V31.282h8.463l4.323,37.385l4.323-37.385h8.644v46.273h-5.539
												V41.268l-4.566,36.288H148.513z"></path>
                                <path fill="#FFFFFF" d="M175.484,65.623l-1.156,11.933h-5.846l5.54-46.273h8.402l5.663,46.273h-6.09l-1.156-11.933H175.484z
												M178.162,37.311l-2.25,23.319h4.504L178.162,37.311z"></path>
                                <path fill="#FFFFFF" d="M192.168,31.282h6.33l6.697,32.088V31.282h5.296v46.273h-6.331l-6.696-31.599v31.599h-5.296V31.282z"></path>
                                <path fill="#FFFFFF" d="M221.573,65.623l-1.157,11.933h-5.846l5.541-46.273h8.402l5.662,46.273h-6.089l-1.157-11.933H221.573z
												M224.251,37.311L222,60.63h4.504L224.251,37.311z"></path>
                                <path fill="#FFFFFF" d="M238.072,34.935l3.654-3.653h9.557l3.652,3.653v9.805h-5.844v-7.249l-1.219-1.217h-2.737l-1.22,1.217v33.854
												l1.22,1.218h2.737l1.219-1.218V58.681h-2.922v-5.234h8.766v20.457l-3.652,3.652h-9.557l-3.654-3.652V34.935z"></path>
                                <path fill="#FFFFFF" d="M260.175,31.282h14.427v4.993h-8.583V51.62h7.489v4.99h-7.489v15.953h8.706v4.992h-14.55V31.282z"></path>
                                <path fill="#FFFFFF" d="M279.352,31.282h13.516l3.653,3.653v19.242l-3.227,3.227l3.653,20.152h-5.662l-3.594-19.727h-2.494v19.727
												h-5.846V31.282z M290.675,51.863V37.371l-1.217-1.217h-4.261V53.08h4.261L290.675,51.863z"></path>
                                <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="1.5" y1="87.042" x2="298.5" y2="87.042"></line>
                                <g>
                                    <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="117.5" y1="14.042" x2="298.5" y2="14.042"></line>
                                    <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="3.5" y1="14.042" x2="9.5" y2="14.042"></line>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" d="M15.1,18.99l-0.557,5.745h-2.814l2.667-22.277h4.045l2.726,22.277h-2.931l-0.557-5.745H15.1z M16.389,5.36
																																											l-1.084,11.227h2.169L16.389,5.36z"></path>
                                    <path fill="#FFFFFF" d="M30.14,24.735H25.42l-1.759-1.759V2.458h2.814v19.288l0.586,0.586h1.436l0.586-0.586V2.458h2.814v20.519
																																											L30.14,24.735z"></path>
                                    <path fill="#FFFFFF" d="M40.079,5.389l-0.586-0.586h-1.026L37.88,5.389v6.273l0.586,0.586h2.755l1.759,1.759v8.969l-1.759,1.759
																																											h-4.455l-1.759-1.759v-4.661h2.814v3.488l0.586,0.586h1.173l0.586-0.586v-6.566l-0.586-0.586h-2.755l-1.759-1.759V4.217
																																											l1.759-1.759h4.309l1.759,1.759v4.69h-2.814V5.389z"></path>
                                    <path fill="#FFFFFF" d="M50.78,4.803v19.932h-2.814V4.803h-2.667V2.458h8.149v2.345H50.78z"></path>
                                    <path fill="#FFFFFF" d="M56.146,2.458h6.507l1.759,1.759v9.263l-1.554,1.554l1.759,9.702h-2.726l-1.729-9.497H58.96v9.497h-2.814
																																											V2.458z M61.598,12.366V5.389l-0.586-0.586H58.96v8.148h2.052L61.598,12.366z"></path>
                                    <path fill="#FFFFFF" d="M70.541,18.99l-0.557,5.745H67.17l2.667-22.277h4.045l2.726,22.277h-2.931l-0.557-5.745H70.541z
																																											 M71.831,5.36l-1.084,11.227h2.169L71.831,5.36z"></path>
                                    <path fill="#FFFFFF" d="M79.308,24.735V2.458h2.814v19.874h3.723v2.404H79.308z"></path>
                                    <path fill="#FFFFFF" d="M88.573,2.458h2.814v22.277h-2.814V2.458z"></path>
                                    <path fill="#FFFFFF" d="M97.455,18.99l-0.557,5.745h-2.814l2.667-22.277h4.045l2.726,22.277h-2.931l-0.557-5.745H97.455z
																																											 M98.745,5.36L97.66,16.586h2.169L98.745,5.36z"></path>
                                    <path fill="#FFFFFF" d="M106.222,2.458h3.048l3.225,15.448V2.458h2.55v22.277h-3.048l-3.224-15.213v15.213h-2.55V2.458z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}