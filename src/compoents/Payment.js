import React, { useState } from 'react';
import axios from 'axios';
import arrow_icon from '../images/arrow-small-right 1.svg'



function Payment() {
    const TOKEN = localStorage.getItem('token');
    console.log(TOKEN, 'this is token from package page')
    const orderId = localStorage.getItem("orderId");
    console.log(orderId, 'order id')


    const [pay, setPay] = useState()


    const payHandler = async () => {
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


    return (
        <div>
            {
                <div className='text-center d-flex justify-content-center align-items center'>
                    <button className='button-poets button-link color_white heading mt-5 p-2 mx-auto w-auto' onClick={payHandler}><img src={arrow_icon} alt="arrow icon" />   پرداخت  </button>
                </div>
            }
            {
                pay &&

                <div className='color_white mt-3 w-100' dangerouslySetInnerHTML={{ __html: `${pay}` }}></div>
            }
        </div>
    );
}

export default Payment;