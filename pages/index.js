import React from "react";
import Service from "./service";
import Technology from "./technology";
import Testimonials from "./../src/Testimonials";
import { Grid, makeStyles } from "@material-ui/core";

const style = {};

const useStyles = makeStyles(style);

const customers = [
  "img/Bostellogolg.png",
  "img/newtron.jpeg",
  "img/qno.png",
  "img/golditor.jpg",
  "img/logo (1).png",
  "img/chartipedia_logo_light.f47df378.svg",
  "img/kb_logo_white.svg",
  "img/owner-manager.svg",
];

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <section className="banner_home">
        <div className="container-fluid">
          <h1 className="mymove ">
            Helping businesses and startups grow via Digital Solutions
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
      <section className="customers">
        <div className="container-fluid">
          <h2
            className="heading color_man tc wow fadeInUp animated"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            Trusted By
          </h2>
            <div
              className="grid mt-4 space-x-12 grid-cols-2 md:grid-cols-4 gap-y-0 auto-rows-auto items-center justify-center place-items-center max-w-fit min-w-fit mx-auto wow fadeInUp animated last:col-span-4"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              {customers.map((customer, index) => (
                <img
                  src={customer}
                  alt="customer"
                  className="w-48 h-28 aspect-[3/2] object-contain mix-blend-color-burn filter saturate-0"
                  key={customer}
                />
              ))}
            </div>
        </div>
      </section>
    </>
  );
}
