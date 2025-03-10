import React, { useEffect } from 'react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      mass: 0.4,
      damping: 5,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
}
const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [])
  
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible' exit='exit' className="container order">
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div >
  )
}

export default Order;