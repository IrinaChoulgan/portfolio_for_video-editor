import React from 'react';
import { AppWrapp } from '../../wrapper';
import s from './Header.module.css'

import { images } from '../../constants';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const {t} = useTranslation()

  return (
   <div className={s.header}>
    <img className={s.header_video} src={images.hero} alt=""/>
    <div className={s.header_video_overlay}/>
    <h2 className={s.header_title}>{t('title')}</h2>
   </div>
  );
};

export default AppWrapp(Header, 'home');
