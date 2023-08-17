import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import style from './Navbar.module.css';
import s from '../../App.module.css';
import LanguagesBtn from '../LanguagesBtn/LanguagesBtn';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={style.app__navbar}>
      <a href="/" className={style.app__navbar_logo}>
    LOGO     
     </a>
      <ul className={style.app__navbar_links}>
        {['home', 'about', 'work','contact'].map((item) => (
          <li className={`${s.app__flex} ${s.p_text}`} key={`link-${item}`}>
            <div className={style.app__navbar_div} />
            <a className={style.app__navbar_link} href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <LanguagesBtn/>

      <div className={style.app__navbar_menu}>
        <HiMenuAlt4 className={style.app__navbar_svg} onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{ x: [100, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX className={style.app__navbar_close} onClick={() => setToggle(false)} />
            <ul className={style.app__navbar_list}>
              {['home', 'about', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    className={style.app__navbar_menu_link}
                    onClick={() => setToggle(false)}
                    href={`#${item}`}
                  >
                    {item}
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
