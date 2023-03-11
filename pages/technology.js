import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
// import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {};

const useStyles = makeStyles(style);

const Technology = ({ props, dispatch }) => {
  const classes = useStyles();
  const technologies = [
    { name: "React Js", icon: "react" },
    { name: "Angular", icon: "angular" },
    { name: "Node Js", icon: "node" },
    { name: "React Native", icon: "react" },
    { name: "JS", icon: "js-square" },
    { name: "PHP", icon: "php" },
    { name: "Laravel", icon: "laravel" },
    { name: "WordPress", icon: "wpressr" },
    { name: "MongoDB", icon: "mdb" },
    { name: "Html", icon: "html5" },
    { name: "VueJS", icon: "vuejs" },
    { name: "Flutter", icon: "mobile", type: "fa" },
    { name: "NextJS", icon: "bolt", type: "fa" },
    { name: "NuxtJS", icon: "vuejs" },
    { name: "TypeScript", icon: "js" },
    { name: "Kotlin", icon: "java" },
  ];
  return (
    <>
      <section className="p50 technologies">
        <div className="container-fluid">
          <h2 className="heading mb-5 color_man tc wow fadeInUp">
            {" "}
            Our <span>Technologies</span>
          </h2>
          <div
            className="wow fadeInUp animated grid md:grid-cols-4 grid-cols-2 auto-rows-auto gap-2 justify-center items-center place-items-center place-items-centei"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            {technologies.map((row, i) => (
              <div key={i} className="col-md-3 col-sm-4 col-6">
                <div className="flex flex-col gap-4 items-center text-center justiyfy-center mb-3">
                  <FontAwesomeIcon
                    icon={[row.type || "fab", row.icon]}
                    height="90px"
                    width="90px"
                  />
                  <h5>{row.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
