import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import style from './Work.module.css';
import s from '../../App.module.css';

import { projects } from './Projects';
import { filters } from './Filters';


const Work = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(projects);

  const { t } = useTranslation();

  const menu = t('navigation_menu', { returnObjects: true });
  const menuItem = menu[2].title

  useEffect(() => {
    setFilterWork(projects.filter((project) => project.tags === filters[0].title));
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === filters[filters.length - 1].title) {
        setFilterWork(projects);
      }
        else {
        setFilterWork(projects.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <section id={menuItem}>
      <h2 className={style.head_text}>
      {t('work_title')}
      </h2>
      <div className={style.app__work_filter}>
        {filters.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item.title)}
            className={`${style.app__work_filter_item} ${s.app__flex} ${s.p_text} ${
              activeFilter === item.title ? 'item_active' : ''
            }`}
          >
            {item.title}
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
              <img src={work.imgUrl} alt={work.name} loading="lazy"/>
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
    </section>
  );
};

export default Work;
