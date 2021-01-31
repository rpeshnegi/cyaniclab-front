import * as React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

const style = {
    motionDiv: {
        width: '100%',
        '& .content': {
            width: '65%',
            margin: 'auto',
            textAlign: 'center',
        },
    },
    actionDiv: {
        display: 'flex',
        marginTop: '4rem',
        '& .arrow': {
            color: '#545469',
            fontSize: '16px',
            fontWeight: '700',
            padding: '16px',
            cursor: 'pointer',
        },
        '& .dot': {
            backgroundColor: '#2d2dff',
            display: 'inline-block',
            borderRadius: '8px',
            height: '12px',
            width: '12px',
            margin: '8px',
            cursor: 'pointer',
        }
    }
};

const useStyles = makeStyles(style);

const directionOffset = 800;

const variants = {
    enter: direction => ({
        x: direction < 0 ? -directionOffset : directionOffset,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: direction => ({
        zIndex: 0,
        x: direction < 0 ? -directionOffset : directionOffset,
        opacity: 0
    })
};

// ! Fix scroll animation direction on bullets

export const MotionSlider = ({ content }) => {
    const classes = useStyles();
    const [[page, direction], setPage] = useState([0, 0]);
    const [activeBullet, setActiveBullet] = useState(0);
    const i = wrap(0, content.length, page);
    const paginate = newDirection => {
        if (page + newDirection < content.length && page + newDirection >= 0) {
            setPage([page + newDirection, 0]);
            setActiveBullet(page + newDirection);
        } else if (page + newDirection === content.length) {
            setPage([0, 0]);
            setActiveBullet(0);
        } else if (page + newDirection === -1) {
            setPage([content.length - 1, 0]);
            setActiveBullet(content.length - 1);
        }
    };

    useEffect(() => {
        
    }, [])

    return (
        <>
            <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
                <motion.div
                    className={classes.motionDiv}
                    position="relative"
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: {
                            type: "spring",
                            stiffness: 800,
                            damping: 100,
                            duration: 0.1
                        },
                        opacity: { duration: 0.6 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < swipeConfidenceThreshold) {
                            paginate(-1);
                        } else if (swipe > -swipeConfidenceThreshold) {
                            paginate(1);
                        }
                    }}
                >
                    <div className="carousel-item active">
                        <div className="kc_tab_content">
                            <div className="usr-img"><img src={content[i].img} /></div>
                            <p>{content[i].text}</p>
                            <h6>{content[i].name}</h6>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <Box
                className={classes.actionDiv}
                position="relative"
                alignItems="center"
                top={[0, null, -64]}
                style={{ zIndex: 1, float: "right" }}
            >
                <Box className="arrow" onClick={() => paginate(-1)}>{"<"}</Box>

                {content.map(item => (
                    <Box
                        className="dot"
                        key={item.id}
                        onClick={() => {
                            setPage([item.id, 0]);
                            setActiveBullet(item.id);
                        }}
                        bg={activeBullet === item.id ? "brand" : "text"}
                    ></Box>
                ))}

                <Box className="arrow" onClick={() => paginate(1)}>{">"}</Box>
            </Box>
        </>
    );
};

const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};
