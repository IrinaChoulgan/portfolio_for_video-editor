import React from 'react';

import { About, Footer, Header, Work, Reviews } from './container';
import { Navbar } from './components';

import s from './App.module.css';

const App = () => {
  return (
    <div className={s.app}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Reviews/>
      <Footer />
    </div>
  );
};

export default App;
