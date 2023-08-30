import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.css';
import s from '../../App.module.css';
import LanguagesBtn from '../LanguagesBtn/LanguagesBtn';

const Navbar = () => {
  const { t } = useTranslation();
  const menu = t('navigation_menu', { returnObjects: true });


  const [toggle, setToggle] = useState(false);
  return (
    <nav className={style.app__navbar}>
    
      <a href="/" className={style.app__navbar_logo}>
    PORTFOLIO    
     </a>
     
     <LanguagesBtn />

      <ul className={style.app__navbar_links}>
        {menu.map((item,index ) => (
          <li className={`${s.app__flex} ${s.p_text}`} key={index}>
            <div className={style.app__navbar_div} />
            <a className={style.app__navbar_link} href={`#${item.title}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>


      <div className={style.app__navbar_menu}>
        <HiMenuAlt4 className={style.app__navbar_svg} onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{ x: [100, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX className={style.app__navbar_close} onClick={() => setToggle(false)} />
            <ul className={style.app__navbar_list}>
              {menu.map((item, index) => (
                <li key={index}>
                  <a
                    className={style.app__navbar_menu_link}
                    onClick={() => setToggle(false)}
                    href={`#${item.title}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

    </nav>

  );
};

export default Navbar;
