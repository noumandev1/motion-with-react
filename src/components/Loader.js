import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.5,
                ease: 'easeInOut'
            },
            y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.25,
                ease: 'easeInOut'
            }
        }
    }
    ,
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                repeat: Infinity,
                repeatType: 'reverse', duration: 0.25,
                ease: 'easeOut'
            }

        }
    }
};

function Loader() {

    const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')
    return (
        <>
            <motion.div
                variants={loaderVariants}
                animate={animation}
                className="loader"
            ></motion.div>
            <div onClick={() => cycleAnimation()}>
                Cycle Loader
            </div>
        </>
    );
}

export default Loader;
