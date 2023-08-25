import React from 'react';
import s from '../App.module.css';

const NavigationDots = ({ active }) => {
  return (
    <div className={s.app__navigation}>
      {['home', 'about', 'work', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={s.app__navigation_dot}
          style={active === item ? { backround: '#0EAD19' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
