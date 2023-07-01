import React, { useContext } from 'react';
import arrow_icon from '../images/arrow-small-right 1.svg'
import phoenix from '../images/p.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PayContext from '../context/PayProvider';



const Home = () => {
    const context = useContext(PayContext)

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                exit={{ opacity: 0 }}
                id='home-section' className=' position-relative justify-content-center text-center d-flex flex-column '>
                <h1 className='heading color_white mt-5'>ققنوس</h1>
                <h2 className='heading color_white'>دردانه های ادب پارسی</h2>
                <Link to={'/poets'} className='button-link text-decoration-none mt-2 d-flex align-items-center p-2 mx-auto'>
                    <img src={arrow_icon} alt='arrow icon' />
                    {
                        context.pay === false ? <span className='color_white heading'>سخنوران پر مخاطب</span>
                            : <span className='color_white heading'>همه سخنوران</span>

                    }
                </Link>
                {
                   context.logged===true && context.pay === false &&
                    <Link to={'/package'} className='button-link text-decoration-none mt-2 d-flex align-items-center p-2 mx-auto'>
                        <img src={arrow_icon} alt='arrow icon' />

                        <span className='color_white heading'>تهیه اشتراک</span>
                    </Link>
                }
                <img src={phoenix} alt="phoenix" className='position-absolute' />
            </motion.section>
        </>
    );
};

export default Home;