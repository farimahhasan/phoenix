import React, { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import arrow_icon from '../images/arrow-small-right 1.svg'

const Package = () => {

    const TOKEN = localStorage.getItem('token');
    const orderStroge = localStorage.getItem("order");

    const navigate = useNavigate();

    const getHandler = async () => {
        axios.get('https://farimahhasan.ir/api/package/1/order', {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
            .then(response => {
                window.localStorage.setItem("order", true);
                window.localStorage.setItem("orderId", `${response.data.order.id}`)
                navigate('/payment')

            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {
        orderStroge && navigate('/payment')
    }, [])

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className=''
            id="package-section"
        >

            {
                <div className='text-center d-flex justify-content-center align-items-center vh-100'>
                    <button className='button-poets button-link color_white heading mt-5 p-2 mx-auto w-auto' onClick={getHandler}><img src={arrow_icon} alt="arrow icon" />  دسترسی به همه سخنوران
                        <br />
                        با پرداخت 20 هزار تومان </button>
                </div>
            }
        </motion.section>
    );
};

export default Package;