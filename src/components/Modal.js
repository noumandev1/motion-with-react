import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='backdrop'
        >
          <motion.div variants={modal} className='modal'>
            <p>Want to make another pizza</p>
            <Link to='/'>
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
