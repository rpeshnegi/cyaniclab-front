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

        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
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