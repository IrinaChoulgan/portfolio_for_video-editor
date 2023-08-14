import React from 'react';
import { NavigationDots } from '../components';
import s from '../App.module.css';

const AppWrapp = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`${s.app__container} ${classNames}`}>

        <div className={`${s.app__wrapper} ${s.app__flex}`}>
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapp;
