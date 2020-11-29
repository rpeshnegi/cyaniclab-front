import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";
import { random } from "lodash";

import Cube from "./Cube";
import WhiteCube from "./WhiteCube";
import TriAngles from "./TriAngles";

export default function Cubes() {
    const group = useRef();

    // useFrame(() => {
    //     group.current.rotation.y += 0.005;
    // });

    // const nodesCubes = map(new Array(50), (el, i) => {
    //     return <Cube key={i} />;
    // });

    // return <group ref={group}>{nodesCubes}</group>;
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
