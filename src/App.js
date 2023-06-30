import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/main.css';

import Header from './compoents/Header';
import AnimatedRoutes from './compoents/AnimatedRoutes';
import ScrollTop from './compoents/ScrollTop';
import Back from './compoents/Back';


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
      <ScrollTop />
      <Back />
    </>
  );
};


export default App;
