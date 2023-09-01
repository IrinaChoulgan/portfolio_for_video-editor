import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import { review } from './ReviewsData.js';
import ReviewMobile from './ReviewMobile.js'

import st from './Reviews.module.css';

const Review = () => {
const [isMobileView, setIsMobileView] = useState(window.innerWidth < 650);

    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 650);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      if (isMobileView) {
        return <ReviewMobile/>;
      }
  return (
    <Splide
      options={{
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        pauseOnHover: true,
        autoplay: true,
        interval: 1000,
        speed: 2,
      }}
    >
      {review.map((review, index) => (
        <SplideSlide className={st.slider_track} key={index}>
              <div className={st.review} >
            <p>"{review.text}"</p> 

            <div className={st.review_info}>
            <p className={st.autor}>{review?.autor}</p>
            {review.url ? 
            <a href={review.url} className={st.link} target="_blank" rel="noreferrer">{review.company}</a> : 
            <p className={st.link}>{review.company}</p>}
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Review;
