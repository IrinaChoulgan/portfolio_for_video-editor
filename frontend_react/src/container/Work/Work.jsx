import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrapp } from '../../wrapper';
import { urlFor, client } from '../../client';
import style from './Work.module.css';
import s from '../../App.module.css';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className={s.head_text}>
        My Creative Portfolio
      </h2>
      <div className={style.app__work_filter}>
        {['UI/UX', 'Web App', 'React JS', 'All'].map((item, index) => (
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
            <div className={`${style.app__work_img} ${s.app__flex}`}>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={`${style.app__work_hover} ${s.app__flex}`}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={s.app__flex}
                  >
                    <AiFillEye className={style.work_icon} />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={s.app__flex}
                  >
                    <AiFillGithub className={style.work_icon} />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className={`${style.app__work_content} ${s.app__flex}`}>
              <h4 className={s.bold_text}>{work.title}</h4>
              <p className={s.p_text} style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className={`${style.app__work_tag} ${s.app__flex}`}>
                <p className={s.p_texts}>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrapp(Work, 'work');
