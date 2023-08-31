import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Modal from './Modal'

import { recommendation } from './Reviews.js'

import style from '../Work/Work.module.css'
import s from '../../App.module.css'

let bigURL = '';
let bigOne = ''

const Recommendation = () => {
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [filterWork, setFilterWork] = useState(''); 
    const [showModal, setShowModal] = useState(false);

    const handleReviewFilter = (item) => {
        setAnimateCard([{ y: 100, opacity: 0 }]);
    
        setTimeout(() => {
          setAnimateCard([{ y: 0, opacity: 1 }]);
          setFilterWork(recommendation.filter((review) => review.tags.includes(item)));
        }, 500);
      }; 
    

  const closeModal = () => {
    bigURL = '';
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const handleClick = (imageUrl, imageOne) => {
    bigURL = imageUrl;
    bigOne = imageOne;
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={style.app__work_portfolio}
      >
        {recommendation.map((review, index) => (
          <div className={`${style.app__work_item} ${s.app__flex}`} key={index} >
            <div className={`${style.app__work_img} ${s.app__flex}`} >
              <img src={review.imgUrl} alt={review.name} />
          
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={`${style.app__work_hover} ${s.app__flex}`}
                onClick={() => handleClick(review.imgUrl, review.imgUrl_1)}
              >
              </motion.div>
            </div>

            <div className={`${style.app__work_content} ${s.app__flex}`}>
              <div className={`${style.app__work_tag} ${s.app__flex}`}>
                <h5 className={s.p_text}>{review.tags}</h5>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {showModal && (
        <Modal bigURL={bigURL} bigOne={bigOne} onClose={closeModal}/>
       )}
    </>
  )
}

export default Recommendation
