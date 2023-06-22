import React from 'react';
import Details from './Details';
import Category from './Category';
import CategoryChild from './CategoryChild';
import Poem from './Poem';
import PoemChild from './PoemChild';
import Form from './Form';
import Home from './Home';
import Package from './Package';
import RequireAuth from './RequireAuth';
import Layout from './Layout';
import Poets from './Poets';
import Test from './Test';
import Missing from './Missing';
import Payment from './Payment';

import { Route, Routes,useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {

    const logged = window.localStorage.getItem("isLoggedIn")
    const location=useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route path="/details/:id" element={<Details />} />
                    {/* <Route path="search/details/:id" element={<Details />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:fullUrl/:fullUrl2" element={<Category />} />
                    <Route path="/category-child/:fullUrl/:fullUrl2/:fullUrl3" element={<CategoryChild />} />
                    <Route path="/poem/:fullUrl/:fullUrl2/:fullUrl3" element={<Poem />} />
                    <Route path="/poem-child/:fullUrl/:fullUrl2/:fullUrl3/:fullUrl4" element={<PoemChild />} />

                    <Route path="/login" element={<Form />} />
                    <Route path="/poets" element={<Poets />} />
                    <Route path="/poets/details/:fullUrl" element={<Details />} />
                    {/* <Route path="unauthorized" element={<Unauthorized />} /> */}
                    <Route element={<RequireAuth />}>
                        <Route path="/package" element={<Package />} />
                        <Route path="/payment" element={<Payment />} />
                    </Route>

                   
                    {/* <Route path="/search" element={<Cartsearch/>} />        */}

                    

                    <Route path='/test' element={<Test />} ></Route>

                     <Route path="*" element={<Missing />} /> 
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;