import React, { useState, useEffect } from 'react';
import { AppWrapp } from '../../wrapper';
import s from './Header.module.css'

import { images } from '../../constants';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const {t} = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <div className={s.header}>
    <img className={s.header_video} src={images.hero} alt=""/>
    <div className={s.header_video_overlay}/>
    <div className={s.title_wrapper}>
      <h2 className={`${s.header_title} ${isScrolled ? s.blur : ''}`}>{t('title')}</h2>
      <h2 className={`${s.header_title} ${isScrolled ? s.blur : ''}`}>{t('title2')}</h2>
    </div>
   </div>
  );
};

export default AppWrapp(Header, 'home');
