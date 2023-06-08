import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/main.css';

import Header from './compoents/Header';
import AnimatedRoutes from './compoents/AnimatedRoutes';
import { Link, useLocation } from 'react-router-dom';


const App = () => {
  // const location=useLocation();
  // let crumblink='';
  // const path=location.pathname.split('/').filter(p=>p!="").map((c)=>{
  //   crumblink+=`/${c}`
  //   return <Link to={crumblink} key={c}>
  //     {c}
  //   </Link>
  // })
  // console.log(crumblink)
  return (
    <>
      <Header />
       {/* {path} */}
      <AnimatedRoutes/>
    </>
  );
};


export default App;
