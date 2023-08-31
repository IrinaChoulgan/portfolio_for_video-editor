import React from 'react';

import { About, Footer, Header, Work, ReviewsRecommendation } from './container';
import { Navbar } from './components';

import s from './App.module.css';
import Container from './components/Container/Container';

const App = () => {
  return (
    <div className={s.app}>
      <Navbar />
      <Container>
         <Header />
      </Container>
      <Container>
         <About />
      </Container>
      <Container>
         <Work />
      </Container>
      <Container>
        <ReviewsRecommendation/>
      </Container>
      <Container>
         <Footer />
      </Container>
    </div>
  );
};

export default App;
