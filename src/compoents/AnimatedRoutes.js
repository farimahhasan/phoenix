import React, { useContext } from 'react';
import Details from './Details';
import Category from './Category';
import CategoryChild from './CategoryChild';
import Poem from './Poem';
import PoemChild from './PoemChild';
import Form from './Form';
import Home from './Home';
import Package from './Package';
import Poets from './Poets';
import Test from './Test';
import Search from './Search';
import Missing from './Missing';
import Payment from './Payment';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PayContext from '../context/PayProvider';

const AnimatedRoutes = () => {

    const context = useContext(PayContext)

    return (
        <AnimatePresence>
            <Routes >
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<Home />} />
                <Route path="/category/:fullUrl/:fullUrl2" element={<Category />} />
                <Route path="/category-child/:fullUrl/:fullUrl2/:fullUrl3" element={<CategoryChild />} />
                <Route path="/poem/:fullUrl/:fullUrl2/:fullUrl3" element={<Poem />} />
                <Route path="/poem-child/:fullUrl/:fullUrl2/:fullUrl3/:fullUrl4" element={<PoemChild />} />
                <Route path="/login" element={context.logged ? <Navigate to="/" /> : <Form />} />
                <Route path="/poets" element={<Poets />} />
                <Route path="/poets/details/:fullUrl" element={<Details />} />
                {/* <Route path='/test' element={<Test />} />  */}
                <Route path="/package" element={(context.logged) && (context.logged && !context.pay) ? <Package /> : <Navigate to="/" />} />
                <Route path="/payment" element={(context.logged) && (context.logged && !context.pay) ? <Payment /> : <Navigate to="/" />} />
                <Route path="/search" element={context.pay ? <Search /> : <Navigate to="/" />} />
                <Route path="*" element={<Missing />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;