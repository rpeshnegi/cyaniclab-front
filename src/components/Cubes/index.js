import React, { useEffect, useRef, useState } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";
import { random } from "lodash";

import Cube from "./Cube";
import WhiteCube from "./WhiteCube";
import TriAngles from "./TriAngles";
import useYScroll from './../../helpers/useYScroll'

export default function Cubes({ YOffset = 0 }) {
    const [y] = useYScroll([-100, 2400], { domTarget: window })

    const group = useRef();
    const [incScale, setIncScale] = useState(true);
    const [prevYOffset, setPrevYOffset] = useState(0);

    useEffect(() => {
        
        // group.current.scale.z = y.to((y) => (y / 500) * 25);
        console.log(group);
        setInterval(() => {
            setIncScale(incScale => !incScale);
        }, 5000);
        // return () => clearInterval(interval);
    }, [])

    useFrame(() => {
        console.log(YOffset);
        // group.current.rotation.y += 0.005;
        // console.log(group);
        // if (YOffset > prevYOffset) {
        //     group.current.scale.y -= 0.05;
        //     group.current.scale.x -= 0.05;
        //     group.current.position.y += 5;
        // }
        // if (YOffset < prevYOffset) {
        //     group.current.scale.y += 0.05;
        //     group.current.scale.x += 0.05;
        //     group.current.position.y -= 5;
        // }
        // setPrevYOffset(YOffset)
        // group.current.scale.y -= 0.004;
        // group.current.scale.x -= 0.004;
        // group.current.position.y += 0.2;
        // group.current.scale.z += 0.005;

        // group.current.position.y = 15;
        // group.current.position.z = 0;
    });

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
