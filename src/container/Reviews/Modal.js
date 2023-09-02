import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';
import {motion, AnimatePresence} from 'framer-motion'

import st from './Reviews.module.css'

const modalRoot = document.querySelector('#modal-root');

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
      y: '0',
      opacity: 1,
      transition: {
          duration: 0.3,
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

export default function Modal({ onClose, bigURL, bigOne }) {
  const [showBigURL, setShowBigURL] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const keyDownHandler = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const overlayClickHandler = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleIconClick =()=>{
    onClose();
  }

  const handleClick = () => {
    setShowBigURL(prevState => !prevState);
  }

  return createPortal(
    <div 
       className={st.overlay} 
       onClick={overlayClickHandler} 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}>
     <motion.div 
       variants={dropIn}
       initial="hidden"
       animate="visible"
       exit="exit"
       className={st.modal}
      >
      <HiX className={st.modal_close} onClick={handleIconClick}/>

        {showBigURL ? (
          <img src={bigURL} className={st.img} alt="recommendation"/>
        ) : (
          <img className={st.img} src={bigOne} alt="recommendation"/>
        )}
        { bigOne && (
          <button className={st.btn} onClick={handleClick}>
            Next page
          </button>
        )}
      </motion.div>
    </div>,
    modalRoot,
  );
}
