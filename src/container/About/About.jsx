import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { AppWrapp } from '../../wrapper';
import style from './About.module.css';
import s from '../../App.module.css';

const About = () => {

  const { t } = useTranslation();
  const info = t('about_information', { returnObjects: true });

  return (
    <>
      <h2 className={s.head_text}>
      {t('about_title')}
      </h2>

    <div className={style.app__header_wrapper}>
            {info.map(info => (
               <motion.div 
               whileInView={{ x: [-100, 0], opacity: [0, 1] }}
               transition={{ duration: 0.5 }}
               className={style.app__header_cards}
               key={info.id}
            >
            <div  className={style.cards_info}>
            <h3>{info.title}</h3>
            <p>{info.text}</p>
            </div>
            </motion.div> 
            ))}
    </div>
      <div className={style.app__profiles}>
       
          <motion.div 
             whileInView={{ x: [-100, 0], opacity: [0, 1] }}
             transition={{ duration: 0.5 }}
             className={style.app__header_info}
          >{t('about')}</motion.div>    
      
      </div>
    </>
  );
};

export default AppWrapp(About, 'about');
