import React from 'react';
import { review } from './ReviewsData.js';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import st from './Reviews.module.css';

const Review = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 1,
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
