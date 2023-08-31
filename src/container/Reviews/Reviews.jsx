import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Modal from './Modal';

import { reviews } from './Reviews.js'

import style from '../Work/Work.module.css'
import s from '../../App.module.css'

let bigURL = '';
let bigOne = ''

const Reviews = () => {
  const { t } = useTranslation();
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState('');
  const [showModal, setShowModal] = useState(false);

  const menu = t('navigation_menu', { returnObjects: true });
  const menuItem = menu[4].title

  const handleReviewFilter = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

       if (item === 'Recommendation') {
        setFilterWork(reviews.filter((review) => review.tags === 'Recommendation'))}
        else {
        setFilterWork(reviews.filter((review) => review.tags.includes(item)));
      }
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
    <div id={menuItem}>
       <h2 className={style.head_text}>
          {t('reviews_title')}
       </h2>
       <div className={style.app__work_filter}>
        {['Recommendation','Review'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleReviewFilter(item)}
            className={`${style.app__work_filter_item} ${s.app__flex} ${s.p_text}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={style.app__work_portfolio}
      >
        {reviews.map((review, index) => (
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
    </div>
  )
}

export default Reviews
