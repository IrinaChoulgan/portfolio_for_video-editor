import React from 'react'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import { HiX } from 'react-icons/hi'

import s from './Modal.module.css'

const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 300,
        }

    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
}

const Modal = ({ handleClose, linkUrl}) => {

  return (
    <motion.div
      className={s.modal_backdrop}
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <motion.div 
          onClick={(e)=>e.stopPropagation()}
          className={s.modal}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          >
        <HiX className={s.modal_icon} onClick={handleClose}/>

        <ReactPlayer url={linkUrl}  className={s.modal_player} width='900px' height="500px"/>
        </motion.div>
      
    </motion.div>
  )
}

export default Modal
