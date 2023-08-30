import React from 'react';
import { useTranslation } from 'react-i18next';

import { images } from '../../constants';
import { AppWrapp } from '../../wrapper';
import s from '../../App.module.css';
import style from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className={s.head_text}> {t('footer')}</h2>

      <div className={style.app__footer_cards}>
        <div className={style.app__footer_card}>
          <img src={images.email} alt="email" />
          <a href="mailto:wegmannpreuss@icloud.com" className={s.p_text}>
            wegmannpreuss@icloud.com         
          </a>
        </div>
        <div className={style.app__footer_card}>
          <img src={images.linkedIn} alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/dima-tsybulkin-57820a9a" className={s.p_text} target="_blank" rel="noreferrer">
             My LinkedIn          
          </a>
        </div>
        <div className={s.copyright}>
            <p className={`${s.p_text} ${s.copyright_text}`}>2023 {t('copyright')}</p>
          </div>
      </div>
    </>
  );
};

export default AppWrapp(Footer, 'contact');
