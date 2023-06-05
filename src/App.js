import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/main.css';

import Header from './compoents/Header';
import AnimatedRoutes from './compoents/AnimatedRoutes';


const App = () => {
  return (
    <>
      <Header />
      <AnimatedRoutes/>
    </>
  );
};


export default App;
