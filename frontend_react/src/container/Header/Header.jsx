import React from 'react';
import { AppWrapp } from '../../wrapper';
import s from './Header.module.css'

import video from '../../assets/video.mp4'



const Header = () => {
  return (
   <div className={s.header}>
    <video className={s.header_video} src={video} autoPlay muted loop></video>
   </div>
  );
};

export default AppWrapp(Header, 'home');
