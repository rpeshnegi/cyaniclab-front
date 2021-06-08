import React, { useEffect, useRef, useState } from "react";
import { map } from "lodash";
import { useFrame, useThree } from "react-three-fiber";
import { random } from "lodash";
import lerp from 'lerp'
import Cube from "./Cube";
import WhiteCube from "./WhiteCube";
import TriAngles from "./TriAngles";
import useYScroll from './../../helpers/useYScroll'

export default function Cubes({ mouse, yRange }) {
    // const [y] = useYScroll([-100, 2400], { domTarget: window.document.body })
    const group = useRef();
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width

    useEffect(() => {
        // if (window.innerWidth <= 1100) {
        //     group.current.position.x = 35;
        //     group.current.position.y = -6.5
        //     group.current.scale.z = 0.004;
        // } else {
        group.current.position.x = 45;
        group.current.position.y = -6.5
        group.current.scale.z = 0.005;
        // }

    }, [])

    // useEffect(() => {
    //     yRange.onChange(v => {
    //         group.current.position.y = (v - 2.5)
    //         console.log(group.current.position.y);
    //     })
    // }, [yRange])

    useFrame(() => {
       
        group.current.position.y -= ((yRange.prev - yRange.current) * 400)

        // let scrollDown = false;
        // if (YOffset > 0) {
        //     scrollDown = true;
        // } else {
        //     scrollDown = false;
        // }
    }, [yRange]);

    return (
        <group ref={group}>
            {/* first four bar*/}
            <Cube position={[-8, 10, 0]} zIndex="0.8" sizeArgs={[20, 2, 0]} />
            <Cube position={[-8, -3, 0]} zIndex="-0.8" sizeArgs={[20, 2, 0]} />
            <Cube position={[3.1, -4.5, 0]} zIndex="0.8" sizeArgs={[12, 2, 0]} />
            <Cube position={[3.2, 11.5, 0]} zIndex="-0.8" sizeArgs={[12, 2, 0]} />

            {/* 2 horizontal bar*/}
            <Cube position={[9.7, 7.5, 0]} zIndex="0" sizeArgs={[6, 2, 0]} />
            <Cube position={[9.7, -0.4, 0]} zIndex="0" sizeArgs={[6, 2, 0]} />

            {/* 2 top\ bottom/ bars */}
            <Cube position={[8.8, 11.9, 0]} zIndex="-0.8" sizeArgs={[13, 2, 0]} />
            <Cube position={[9, -4.8, 0]} zIndex="0.8" sizeArgs={[13, 2, 0]} />

            {/* helping triangles includes all*/}
            <TriAngles />

            {/* white Cubes */}
            <WhiteCube position={[-4, 6, 0]} zIndex="0.8" sizeArgs={[12, 5, 0]} />
            <WhiteCube position={[-4.2, 0.9, 0]} zIndex="-0.8" sizeArgs={[12, 5, 0]} />
        </group>
    )
};
