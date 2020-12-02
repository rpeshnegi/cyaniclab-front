import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
// import { useSelector } from 'react-redux';

const style = {
    backdrop: {
        zIndex: 5,
        color: '#fff',
    },
};

const useStyles = makeStyles(style);

const Service = ({ props, dispatch }) => {
    const classes = useStyles();
    return <>
        <Box>
            
        <div className="service-section container">  
                 <div className="row align-items-center min ">
<div className="col-sm-4 text-right"> <h2> Our
Services </h2> </div>
<div className="col-sm-8 service-details"> 
<ul>
<li>
<span className="icon_img"><img src="img/uxui_design.png"/> </span>
<span>
<h4>UX/UI Design
</h4>
<p>Design is more than look and feel. It defines how users navigate and experience applications and if we make that a pleasant experience, they will come back. That’s why we analyse the data, make it interactive, test prototypes, and yes, we will make it pretty.
</p>
</span>
</li>
<li>
<span className="icon_img"><img src="img/web_evelopment.png"/></span>
<span>
<h4>Web Development

</h4>
<p>Anything from a simple portfolio website to a fintech platform, you name it, we’ve done it. We can deliver what you need faster than you can say „Oachkatzalschwoaf“ (to save you the trouble of googling it: it’s German for squirrel’s tail).

</p>
</span>
</li>
<li>
<span className="icon_img"><img src="img/app_engineering.png"/></span>
<span>
<h4>App Engineering
</h4>
<p>We love mobile. Doesn’t matter if on web or mobile devices. We are mobile first through and through. That’s why we claim to be the best mobile agency in Vienna.

</p>
</span>
</li>
<li>
<span className="icon_img"><img src="img/growth_marketing.png"/></span>
<span>
<h4>Growth Marketing</h4>
<p>Doing digital marketing only with gut feeling is so 2000. Business decisions based on data, benchmarks and studies is the way marketing is done in 2020. And it’s called Growth Marketing.

</p>
</span>
</li>
</ul></div>
                 </div>
                 </div>
        </Box>
    </>;
}

export default Service