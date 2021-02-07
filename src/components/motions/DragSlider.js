import React, { useRef, useEffect, useState } from "react";

import styled from "styled-components";
import { useMotionValue, motion } from "framer-motion";

import { ScaleBox } from "./scale-box";
import { IntersectionObserver } from "./intersection-observer";

// ! Fix slider reset on final slide

const Slider = styled(motion.div)`
  cursor: grab;
`;
Slider.defaultProps = {
    display: "flex",
    justifyContent: "space-between"
};

export const DragSlider = ({
    children,
    slideApperance, // scale | fadeIn
    bounceStiffness = 100, // Affects the stiffness of the bounce spring. Higher values will create more sudden movement.
    bounceDamping = 10 // affects the damping of the bounce spring. If set to 0, spring will oscillate indefinitely.
}) => {
    const ref = useRef(null);
    const x = useMotionValue(0);

    const [sliderWidth, setSliderWidth] = useState(0);
    const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
    const [sliderConstraints, setSliderConstraints] = useState(0);

    useEffect(() => {
        const calcSliderChildrenWidth = () => {
            setSliderChildrenWidth(
                Array.from(ref.current.childNodes).reduce(
                    (acc, node) => acc + node.clientWidth,
                    0
                )
            );
        };

        calcSliderChildrenWidth();

        const calcSliderWidth = () => {
            setSliderWidth(ref.current.clientWidth);
        };

        calcSliderWidth();
        window.addEventListener("resize", calcSliderWidth);

        const calcSliderConstraints = () => {
            setSliderConstraints(sliderChildrenWidth - sliderWidth);
        };

        calcSliderConstraints();
        window.addEventListener("resize", calcSliderConstraints);
    }, [ref, sliderChildrenWidth, sliderWidth]);

    // const { scrollX } = useViewportScroll();

    // const scrollXValue = useTransform(
    //   scrollX,
    //   [0, 400],
    //   // ['0%', `${isNaN(scrollOffset) ? 0 : -scrollOffset}%`],
    //   ["100%", "0%"],
    //   [0.42, 0, 0.58, 1]
    // );

    const SliderWrap = ({ children }) => {
        return (
            <div style={{ overflowX: "hidden" }}>
                <Slider
                    ref={ref}
                    drag="x"
                    initial={{ x: 0 }}
                    style={{ x }}
                    // style={{ x: scrollXValue }}
                    dragConstraints={{
                        left: `${-sliderConstraints}`,
                        right: 0
                    }}
                    dragTransition={{ bounceStiffness, bounceDamping }}
                >
                    {children}
                </Slider>
            </div>
        );
    };

    return (
        <SliderWrap>
            {React.Children.map(children, child => (
                <IntersectionObserver reset="true">
                    <ScaleBox>{React.cloneElement(child)}</ScaleBox>
                </IntersectionObserver>
            ))}
        </SliderWrap>
    )
};
