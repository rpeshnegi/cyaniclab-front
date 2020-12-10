import React, { useEffect, useRef, useState } from "react";
import { map } from "lodash";
import { useFrame, useThree } from "react-three-fiber";
import { random } from "lodash";
import lerp from 'lerp'
import Cube from "./Cube";
import WhiteCube from "./WhiteCube";
import TriAngles from "./TriAngles";

export default function Cubes({ YOffset = 0, mouse }) {

    const group = useRef();
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width

    useEffect(() => {
        group.current.position.x = 35;
        group.current.position.y = -1.5
        group.current.scale.z = 0.005;
    }, [])

    useFrame(() => {
        // group.current.rotation.x = lerp(group.current.rotation.x, 0 + mouse.current[1] / aspect / 200, 0.1)
        // group.current.rotation.y = lerp(group.current.rotation.y, 0 + mouse.current[0] / aspect / 400, 0.1)
        // console.log(YOffset);
        // console.log(0 + YOffset / aspect / 400);
        // console.log(lerp(group.current.position.x, 0 + YOffset / aspect / 400, 0.1));
        // group.current.position.x = lerp(group.current.position.x, 0 + YOffset / aspect / 400, 0.1)
        // group.current.position.y = lerp(group.current.position.y, 0 + YOffset / 400, 0.1)
        // console.log(group);

        let scrollDown = false;
        if (YOffset > 0) {
            scrollDown = true;
        } else {
            scrollDown = false;
        }
        // if (scrollDown) {
        //     group.current.scale.y = (group.current.scale.y > 0.2) ? (group.current.scale.y - 0.01) : group.current.scale.y;
        //     group.current.scale.x = (group.current.scale.x > 0.2) ? (group.current.scale.x - 0.01) : group.current.scale.x;
        //     // group.current.position.x = (group.current.position.x > -68) ? (group.current.position.x - 0.36) : group.current.position.x;
        //     group.current.position.y = (group.current.position.y < 30) ? (group.current.position.y + 0.36) : group.current.position.y;
        // } else {
        //     group.current.scale.y = (group.current.scale.y < 1) ? (group.current.scale.y + 0.01) : group.current.scale.y;
        //     group.current.scale.x = (group.current.scale.x < 1) ? (group.current.scale.x + 0.01) : group.current.scale.x;
        //     // group.current.position.x = (group.current.position.x < 1) ? (group.current.position.x + 0.36) : group.current.position.x;
        //     group.current.position.y = (group.current.position.y > 1) ? (group.current.position.y - 0.36) : group.current.position.y;
        // }
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
