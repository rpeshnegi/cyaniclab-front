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
        [39, 17.45, 0], // 0
        [36.8, 15.45, 0], // 1
        [41.2, 15.45, 0], // 2
        [26.8, 27.8, 0], // 3
        [22.4, 27.8, 0], // 4
        [24.9, 25.5, 0], // 5
        [41.2, 9, 0], // 6
        [37, 9, 0], // 7
        [39.1, 7.2, 0], // 8
        [27.2, -3.2, 0], // 9
        [25, -1.2, 0], // 10
        [22.8, -3.2, 0], // 11
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
            <group position={[-radius * 2, -radius, -10]} scale={[1, 1.2, 1]}>
                <Fatline />
            </group>
        </group>
    )
}
