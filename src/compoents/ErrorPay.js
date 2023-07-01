import React from 'react';
import arrow_icon from '../images/arrow-small-right 1.svg';
import { Link } from 'react-router-dom';


const ErrorPay = () => {
    return (
        <section className='d-flex justify-content-center align-items-center vh-100 flex-column'>
               <h3 className='text-center'>عملیات پرداخت ناموفق بود</h3>
               <Link to={'/'} className='button-link text-decoration-none mt-2 d-flex align-items-center p-2 mx-auto'>
                        <img src={arrow_icon} alt='arrow icon' />
                        <span className='color_white heading'>صفحه اصلی</span>
                    </Link>
        </section>
    );
};

export default ErrorPay;