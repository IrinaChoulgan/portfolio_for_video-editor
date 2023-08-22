import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { AppWrapp } from '../../wrapper';
import style from './About.module.css';
import s from '../../App.module.css';


const About = () => {

  const { t } = useTranslation();

  return (
    <>
      <h2 className={s.head_text}>
        About
      </h2>

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
