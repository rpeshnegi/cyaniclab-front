import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";
import { random } from "lodash";

import Cube from "./Cube";

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
            <Cube position={[-5, 10, -1]} zIndex="0.8" sizeArgs={[20, 2, 0.29]} meshColor={0xffc600}/>
            <Cube position={[-5, -3, -1]} zIndex="-0.8" sizeArgs={[20, 2, 0.29]}meshColor={0xffc600} />
            <Cube position={[5, -5.6, -1]} zIndex="0.8" sizeArgs={[12, 2, 0.29]} meshColor={0xffc600}/>
            <Cube position={[6.5, 11.7, -1]} zIndex="2.4" sizeArgs={[12, 2, 0.29]} meshColor={0xffc600}/>
            {/* <Cube position={[0, 10, -1]} zIndex="0.8" sizeArgs={[10, 2, 0.29]} meshColor="0xffffff"/> */}
        </group>
    )
};
