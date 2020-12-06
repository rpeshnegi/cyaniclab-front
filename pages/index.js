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
import About from './about';
import LetsTalk from '../src/LetsTalk';

export default function Index() {
    return (

        <Container maxWidth="lg">
            <Box my={4}>
                <div className="banner-caption">
                    <div className="banner-caption-area">
                <Typography variant="h1" component="h1" gutterBottom>
                Developing Websites That <br/>
Develop Your Business
                </Typography>

                <ul>
                   <li> <strong> 7+</strong> <p> Figures In Revenue Generated </p> </li> 
                   <li> <strong> 7+</strong> <p> Projects Closed  </p> </li> 
                   <li> <strong> 7+</strong> <p> US Cities, & Growing  </p> </li> 

                </ul>
                </div>
                </div>


               
              
               <Service />  
                <Technology />
                <Portfolio />
                <ProTip />
                <WorkGlobaly />
                <About />
                <LetsTalk />
                <Copyright />
            </Box>
        </Container>
    );
}