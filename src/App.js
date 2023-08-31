import React from 'react';

import { About, Footer, Header, Work, Reviews } from './container';
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
        <Reviews/>
      </Container>
      <Container>
         <Footer />
      </Container>
    </div>
  );
};

export default App;
