import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Review from './Review';
import Recommendation from './Recommendation';

import style from '../Work/Work.module.css';
import s from '../../App.module.css';

const ReviewsRecommendation = () => {
  const { t } = useTranslation();
  const menu = t('navigation_menu', { returnObjects: true });
  const menuItem = menu[4].title;

  const [selectedComponent, setSelectedComponent] = useState('Recommendation');

  return (
    <>
      <div id={menuItem}>
        <h2 className={style.head_text}>{t('reviews_title')}</h2>
        <div className={style.app__work_filter}>
          <div
            onClick={() => setSelectedComponent('Recommendation')}
            className={`${style.app__work_filter_item} ${s.app__flex} ${s.p_text}`}
          >
            Recommendation
          </div>
          <div
            onClick={() => setSelectedComponent('Review')}
            className={`${style.app__work_filter_item} ${s.app__flex} ${s.p_text}`}
          >
            Review
          </div>
        </div>
      </div>

      {selectedComponent === 'Recommendation' && <Recommendation />}
      {selectedComponent === 'Review' && <Review />}
    </>
  );
};

export default ReviewsRecommendation;
