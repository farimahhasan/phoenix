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
import FamousPoets from './compoents/FamousPoets';
import Package from './compoents/Package';

import RequireAuth from './compoents/RequireAuth';


import { Route, Routes} from 'react-router-dom';

const App = () => {
  return (
<>
      <Header />
      <main>
          
          {/* <Details/>
           <Form/>  */}
           
      <Routes>

          <Route path="/details/:id" element={<Details />} />
          {/* <Route path="search/details/:id" element={<Details />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/poem/:id" element={<Poem />} />
          <Route path="/login" element={<Form />} />
          <Route path="/famouspoets" element={<FamousPoets />}/>

          <Route element={<RequireAuth />}>
          <Route path="/package" element={<Package />} />
        </Route>

          {/* <Route path="/search" element={<Cartsearch/>} />        */}

          {/* <Route path="*" element={<Missing />} /> */}

      </Routes>
      </main>



</>
  );
};


export default App;
