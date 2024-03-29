import React, {
    useMemo,
    useRef,
    useState,
    useEffect,
    useCallback
} from "react";
import { random } from "lodash";
import { useFrame } from "react-three-fiber";

export default function Cube(props) {
    const mesh = useRef();
    const time = useRef(0);
    const { position, zIndex, sizeArgs } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const isActiveRef = useRef(isActive);
    const [isMobile, setIsMobile] = useState(false)

    // position
    // const position = useMemo(() => {
    //     return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)];
    // }, []);

    // random time mod factor
    const timeMod = useMemo(() => random(0.1, 4, true), []);

    // color
    // const color = isHovered ? 0xe5d54d : (isActive ? 0xf7e7e5 : 0xffc600);
    // const color = isHovered ? 0xe5d54d :  0xffc600;
    const color = 0xffc600;

    //useEffect of the activeState
    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        isActiveRef.current = isActive;
    }, [isActive]);

    // raf loop
    useFrame(() => {
        // mesh.current.rotation.z += 0.01 * timeMod;
        mesh.current.rotation.z = zIndex;
        if (isActiveRef.current) {
            time.current += 0.03;
            mesh.current.position.y = position[1] + Math.sin(time.current) * 0.4;
        }
    });

    // Events
    const onHover = useCallback(
        (e, value) => {
            e.stopPropagation();
            setIsHovered(value);
        },
        [setIsHovered]
    );

    const onClick = useCallback(
        e => {
            e.stopPropagation();
            setIsActive(v => !v);
        },
        [setIsActive]
    );

    return (
        <mesh
            ref={mesh}
            position={position}
            // onClick={e => onClick(e)}
            onPointerOver={e => onHover(e, true)}
            onPointerOut={e => onHover(e, false)}
        >
            <boxBufferGeometry attach="geometry" args={sizeArgs} />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={1.9}
                metalness={-1.5}
                opacity={0.0}
            />
        </mesh>
    );
};