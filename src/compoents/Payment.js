import React, { useState } from 'react';
import axios from 'axios';
import arrow_icon from '../images/arrow-small-right 1.svg'
import { motion } from 'framer-motion';

const Payment = () => {

    const TOKEN = localStorage.getItem('token');
    const orderId = localStorage.getItem("orderId");

    const [pay, setPay] = useState()

    const payHandler = async () => {
        axios.get(`http://farimahhasan.ir/api/order/${orderId}/pay`, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
            .then(response => {
                console.log(response, 'pay data ?');
                window.localStorage.setItem("pay", true)
                setPay(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className=''
            id="payment-section"
        >
            <div className='text-center d-flex justify-content-center align-items-center vh-100 flex-column'>
                <>
                    <button className='button-poets button-link color_white heading mt-5 p-2 mx-auto w-auto' onClick={payHandler}><img src={arrow_icon} alt="arrow icon" />   پرداخت  </button>

                    {
                        pay &&
                        <div className='color_white mt-3 w-100' dangerouslySetInnerHTML={{ __html: `${pay}` }}></div>
                    }
                </>
            </div>


        </motion.section>
    );
}

export default Payment;