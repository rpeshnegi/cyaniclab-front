import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo, lazy } from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Layout from '../src/components/Layout/Layout';
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import * as THREE from 'three'
import Sparks from '../src/components/Background/Sparks'
import Particles from '../src/components/Background/Particles'
import Cubes from "./../src/components/Cubes";
import './../styles.css';
import Box from '@material-ui/core/Box';

const Effects = lazy(() => import("../src/components/Background/Effects"));

export default function MyApp(props) {
    const { Component, pageProps } = props;

    const [hovered, hover] = useState(false)
    const [hasMounted, setHasMounted] = useState(false);
    const [down, set] = useState(false)
    const mouse = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        setHasMounted(true);
        // document.body.style.cursor = hovered
        //     ? 'pointer'
        //     : "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto"
    }, [hovered])
    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider  theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                {hasMounted && (
                    <Canvas
                     class="background-texture"
                        style={{ height: window.innerHeight }}
                        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
                        camera={{ fov: 100, position: [0, 0, 30] }}
                        onMouseMove={onMouseMove}
                        onMouseUp={() => set(false)}
                        onMouseDown={() => set(true)}
                        onCreated={({ gl }) => {
                            gl.toneMapping = THREE.Uncharted2ToneMapping
                            gl.setClearColor(new THREE.Color('#020207'))
                        }}>
                        <fog attach="fog" args={['white', 50, 190]} />
                        {/* <pointLight distance={100} intensity={4} color="white" /> */}
                        <ambientLight intensity={0.6} />
                        <Particles count={isMobile ? 5000 : 10000} mouse={mouse} />
                        <Sparks count={50} mouse={mouse} colors={['#FFC600', 'black', 'white']} />
                        <Suspense fallback={null}>
                            <Effects down={down} />
                        </Suspense>
                        <Cubes />
                    </Canvas>
                )}
                 <Layout >
                        <Component {...pageProps} />
                    </Layout>
                <Box  position="absolute"
                    top={0} >
                   
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};