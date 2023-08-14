import React from 'react';
import { motion } from 'framer-motion';

import { AppWrapp } from '../../wrapper';
import style from './About.module.css';
import s from '../../App.module.css';


const About = () => {
  return (
    <>
      <h2 className={s.head_text}>
        About
      </h2>

      <div className={style.app__profiles}>
       
          <motion.div> Text</motion.div>    
      
      </div>
    </>
  );
};

export default AppWrapp(About, 'about');
