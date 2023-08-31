import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';

import st from './Reviews.module.css'

const modalRoot = document.querySelector('#modal-root');

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
    <div className={st.overlay} onClick={overlayClickHandler}>
      <div className={st.modal}>
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
      </div>
    </div>,
    modalRoot,
  );
}
