import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { extend, useFrame, useThree } from 'react-three-fiber'
import lerp from 'lerp'
import * as meshline from 'threejs-meshline'

extend(meshline)

const r = () => Math.max(0.2, Math.random())

function Fatline() {
    const material = useRef()
    const vertices = [
        [13.58, 8.4, 0], // 0
        [11.7, 6.5, 0], // 1
        [15.48, 6.5, 0], // 2
        [5, 17.3, 0], // 3
        [2.2, 17.3, 0], // 4
        [3.7, 15.7, 0], // 5
        [15.6, 0.58, 0], // 6
        [11.8, 0.58, 0], // 7
        [13.75, -1.3, 0], // 8
        [5.2, -10.2, 0], // 9
        [3.85, -8.7, 0], // 10
        [2.4, -10.2, 0], // 11
    ];
    const faces = [
        // top parts
        [0, 1, 2],
        [3, 4, 5],
        // bottom pasrts
        [6, 7, 8],
        [9, 10, 11],
    ];
    // useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
    return (
        <mesh>
            <geometry
                attach="geometry"
                vertices={vertices.map((v) => new THREE.Vector3(...v))}
                faces={faces.map((f) => new THREE.Face3(...f))}
            />
            <meshBasicMaterial attach="material" color="yellow" />
        </mesh>
    )
}

export default function TriAngles({ count = 1, radius = 10 }) {
    const ref = useRef()

    return (
        <group ref={ref}>
            <Fatline />
        </group>
    )
}
