import React from 'react';
import arrow_icon from '../images/arrow-small-right 1.svg'
import phoenix from '../images/phoenix.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <section id='home-section' className='position-relative justify-content-center text-center d-flex flex-column '>
                <h1 className='heading color_dark mt-5'>ققنوس</h1>
                <h2 className='heading color_dark'>دردانه های ادب پارسی</h2>
                        <Link to={'/famouspoets'} className='text-decoration-none mt-2 d-flex align-items-center p-2 mx-auto'>
                            <img src={arrow_icon} alt='arrow icon' />
                            <span className='color_dark heading'>سخنوران پر مخاطب</span>
                        </Link>
                    <img src={phoenix} alt="phoenix" className='position-absolute'/>
            </section>
        </>
    );
};

export default Home;