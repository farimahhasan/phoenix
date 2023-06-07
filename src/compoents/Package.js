import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
const Package = () => {

    const TOKEN = localStorage.getItem('token');
       console.log(TOKEN, 'this is token from package page')
       const orderStroge = localStorage.getItem("order");
       console.log(orderStroge, 'order id');
    const orderId = localStorage.getItem("orderId");
    console.log(orderId, 'order id')



const [pay,setPay]=useState()


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const getHandler = async () => {
        axios.get('http://farimahhasan.ir/api/package/1/order', {
            headers: {
                //'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        })
            .then(response => {
                console.log(response.data, 'packages data ?');
                window.localStorage.setItem("order", true);
                window.localStorage.setItem("orderId" , `${response.data.order.id}`)

            })
            .catch(error => {
                console.log(error)
            })

    }

    const payHandler=async ()=>{
        axios.get(`http://farimahhasan.ir/api/order/${orderId}/pay`, {
            headers: {
                //'Content-Type': 'application/json',
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


    //axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className='h-100'
        >
            
            {
                orderStroge ?<button onClick={payHandler}> پرداخت</button>
                :<button className='text-center' onClick={getHandler}>انتخاب این پکیج</button>
            }


            {
                pay &&

                <div className='color_white mt-3 w-100' dangerouslySetInnerHTML={{ __html: `${pay}` }}></div>
            }
        </motion.section>
    );
};

export default Package;