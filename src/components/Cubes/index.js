import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";
import { random } from "lodash";

import Cube from "./Cube";
import WhiteCube from "./WhiteCube";

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
            <Cube position={[-5, 10, -1]} zIndex="0.8" sizeArgs={[20, 2, 0]} />
            <Cube position={[-5, -3, -1]} zIndex="-0.8" sizeArgs={[20, 2, 0]}/>
            <Cube position={[5, -5.6, -1]} zIndex="0.8" sizeArgs={[12, 2, 0]} />
            <Cube position={[6.1, 11.5, -1]} zIndex="-0.8" sizeArgs={[12, 2, 0]} />
            <WhiteCube position={[-1, 6, -1]} zIndex="0.8" sizeArgs={[12, 5, 0]} />
            <WhiteCube position={[-1.5, 0.8, -1]} zIndex="-0.8" sizeArgs={[12, 5, 0]} />
        </group>
    )
};
