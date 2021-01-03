import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo, lazy } from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Layout from '../src/components/Layout/Layout';
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import * as THREE from 'three'
import Sparks from './../src/components/background/Sparks'
import Particles from './../src/components/background/Particles'
import Cubes from "./../src/components/Cubes";
import './../styles.css';
import Box from '@material-ui/core/Box';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from "framer-motion";

library.add(fab, faCheckSquare, faCoffee)

const Effects = lazy(() => import("./../src/components/background/Effects"));

export default function MyApp(props) {

    const { Component, pageProps } = props;

    const [hovered, hover] = useState(false)
    const [hasMounted, setHasMounted] = useState(false);
    const [down, set] = useState(false)
    const [YOffset, setYOffset] = useState(0)
    const mouse = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

    const [isMobile, setIsMobile] = useState(false)

    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        setHasMounted(true);
        window.setTimeout(() => {
            window.scroll({
                top: 0,
                left: 0
            });
        }, 100)

        window.addEventListener("mousemove", onMouseMove);
        // window.onscroll = () => {
        //     console.log(window.pageYOffset)
        //     setYOffset(window.pageYOffset)
        // }
        // document.body.style.cursor = hovered
        //     ? 'pointer'
        //     : "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto"
    }, [hovered])
    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <script src="https://kit.fontawesome.com/52917d73bf.js" crossOrigin="anonymous"></script>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {hasMounted && (
                    <Canvas
                        className="background-texture"
                        style={{ height: window.innerHeight }}
                        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
                        camera={{ fov: 100, position: [0, 0, 30] }}
                        onMouseMove={onMouseMove}
                        onMouseUp={() => set(false)}
                        onMouseDown={() => set(true)}
                        onCreated={({ gl }) => {
                            gl.toneMapping = THREE.Uncharted2ToneMapping
                            // gl.setClearColor(new THREE.Color('#020207'))
                            gl.setClearColor(new THREE.Color('black'))
                        }}>
                        {/* <fog attach="fog" args={['blue', 10, 190]} /> */}
                        {/* <pointLight distance={100} intensity={4} color="white" /> */}
                        <ambientLight intensity={0.5} />
                        <Particles count={isMobile ? 200 : 500} mouse={mouse} />
                        <Sparks yRange={yRange} count={50} mouse={mouse} colors={['#FFC600', 'black', 'white']} />
                        <Suspense fallback={null}>
                            <Effects down={down} />
                        </Suspense>
                        <Cubes yRange={yRange} mouse={mouse} YOffset={YOffset} />
                    </Canvas>
                )}
                {/* <div className="background-texture" style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'rgb(255 255 255 / 25%)',
                    backdropFilter: 'blur(1px)'
                }}></div> */}
                <Layout >
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};