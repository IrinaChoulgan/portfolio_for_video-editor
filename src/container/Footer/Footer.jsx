import React from 'react';

import { images } from '../../constants';
import { AppWrapp } from '../../wrapper';
import s from '../../App.module.css';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <h2 className={s.head_text}>You can contact with me</h2>

      <div className={style.app__footer_cards}>
        <div className={style.app__footer_card}>
          <img src={images.email} alt="email" />
          <a href="mailto:wegmannpreuss@icloud.com" className={s.p_text}>
            wegmannpreuss@icloud.com         
          </a>
        </div>
        <div className={s.copyright}>
            <p className={`${s.p_text} ${s.copyright_text}`}>2023 All rights reserved</p>
          </div>
      </div>
    </>
  );
};

export default AppWrapp(Footer, 'contact');
