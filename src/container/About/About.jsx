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
       
          <motion.div 
             whileInView={{ x: [-100, 0], opacity: [0, 1] }}
             transition={{ duration: 0.5 }}
             className={style.app__header_info}
          > 17 years of video editing expertise.
With an extensive career in Ukraine, I've gained diverse skills and deep knowledge of film production. I'm adept at quick learning, adapting to new roles, and expanding my skill set. My strong communication, motivation, and proactive approach drive my work.
Skilled Film and Video Editor with a proven record of fulfilling client visions throughout the film process. Handling multiple tasks while delivering top-tier service, quality, and creativity.
Proficient in editing commercials, special events, and custom client projects. Good motion graphics skills. Creativity and good understanding of all processes</motion.div>    
      
      </div>
    </>
  );
};

export default AppWrapp(About, 'about');
