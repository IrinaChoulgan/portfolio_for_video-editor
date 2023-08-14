import React from 'react';
import { AppWrapp } from '../../wrapper';
import s from './Header.module.css'

import { images } from '../../constants';


const Header = () => {
  return (
   <div className={s.header}>
    <video className={s.header_video} src={images.video} autoPlay muted loop></video>
    <div className={s.header_video_overlay}></div>

    <div className={s.header_text}>
      <h1 className={s.header_title}>Hello!!!!</h1>
      <p className={s.header_title_text}>Text</p>
    </div>

   </div>
  );
};

export default AppWrapp(Header, 'home');
