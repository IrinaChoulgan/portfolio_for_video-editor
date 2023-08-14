import React from 'react';

import { About, Footer, Header, Work } from './container';
import { Navbar } from './components';

import s from './App.module.css';

const App = () => {
  return (
    <div className={s.app}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
