import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrapp } from '../../wrapper';
import style from './Work.module.css';
import s from '../../App.module.css';

import { projects } from './Projects';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('Motion templates');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(projects);

  // const newProject = projects.filter((project=> project.tags==='Motion templates'))

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(projects);
      } else {
        setFilterWork(projects.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className={style.head_text}>
         My Creative Portfolio
      </h2>
      <div className={style.app__work_filter}>
        {['Motion templates','Ads and promos', 'Animated Logos', 'Corporate videos','Motion graphics', 'Social videos', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`${style.app__work_filter_item} ${s.app__flex} ${s.p_text} ${
              activeFilter === item ? 'item_active' : ''
            }`}
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
        {filterWork.map((work, index) => (
          <div className={`${style.app__work_item} ${s.app__flex}`} key={index}>
            <a className={`${style.app__work_img} ${s.app__flex}`} href={work.link} target="_blank" rel="noreferrer">
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={`${style.app__work_hover} ${s.app__flex}`}
              >
              </motion.div>
            </a>

            <div className={`${style.app__work_content} ${s.app__flex}`}>
              <h4 className={s.bold_text}>{work.title}</h4>

              <div className={`${style.app__work_tag} ${s.app__flex}`}>
                <h5 className={s.p_text}>{work.tags}</h5>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrapp(Work, 'work');
