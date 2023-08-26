import React from 'react';
import s from '../App.module.css';
import { useTranslation } from 'react-i18next';

const NavigationDots = ({ active }) => {
  const { t } = useTranslation();
  const menu = t('navigation_menu', { returnObjects: true });

  return (
    <div className={s.app__navigation}>
      {menu.map((item, index) => (
        <a
          href={`#${item.title}`}
          key={index}
          className={s.app__navigation_dot}
          style={active === item.title ? { backround: '#0EAD19' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
