import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/main.css';

import Header from './compoents/Header';
import Details from './compoents/Details';
import Category from './compoents/Category';
import Poem from './compoents/Poem';
import Form from './compoents/Form';
import Home from './compoents/Home';
import Package from './compoents/Package';

import RequireAuth from './compoents/RequireAuth';
import Layout from './compoents/Layout';


import { Route, Routes , Navigate} from 'react-router-dom';
import Poets from './compoents/Poets';

const App = () => {
const logged=window.localStorage.getItem("isLoggedIn")
  return (
    <>
      <Header />

      {/* <Details/>
           <Form/>  */}

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route path="/details/:id" element={<Details />} />
          {/* <Route path="search/details/:id" element={<Details />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/poem/:id" element={<Poem />} />
          <Route path="/login" element={ <Form />} />
          <Route path="/poets" element={<Poets />} />
          <Route path="/poets/details/:id" element={<Details/>} />
          {/* <Route path="unauthorized" element={<Unauthorized />} /> */}

 
          <Route element={<RequireAuth />}>
            <Route path="/package" element={<Package />} />
          </Route> 

          {/* <Route path="/search" element={<Cartsearch/>} />        */}

          {/* <Route path="*" element={<Missing />} /> */}
        </Route>
      </Routes>



    </>
  );
};


export default App;
