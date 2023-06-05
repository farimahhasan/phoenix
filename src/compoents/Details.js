import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import arrow_icon from '../images/arrow-small-right 1.svg'
import axios from 'axios';
import { motion } from 'framer-motion';


const Details = () => {
    const params = useParams();


    const [poet, setPoet] = useState({})

    const getPoet = async () => {
        const response = await axios.get(`https://api.ganjoor.net/api/ganjoor/poet/${params.id}`);
        return response;
    }

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getPoet();
            console.log(response.data)
            setPoet(response.data)
        }
        fetchAPI();
        window.scrollTo(0,0);
    }, [])


    return (
        <>

            {
                !poet.cat ? <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark'>
                    <div className="spinner-grow color_white  " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>:
                  <motion.section 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.75 , ease:"easeOut"}}
            exit={{opacity:0}} className=' d-flex align-items-center justify-content-center ' id="details-section">

                <div className="main">
                    <div className="cards">
                        <div className="cards_item">
                            <div className="card">
                                <div className="card_image mt-2">
                                    {
                                        poet.poet &&
                                        <img src={`https://api.ganjoor.net${poet.poet.imageUrl}`} alt={poet.poet.name} />
                                    }
                                </div>
                                <div className="card_content">
                                    <h2 className="card_title color_dark">
                                        {poet.poet && poet.poet.name}
                                    </h2>
                                    <div className="card_text ">
                                        <p className='color_dark'>
                                            {poet.poet && poet.poet.description}
                                        </p>
                                        <hr />
                                        <p className='d-flex flex-column justify-content-center align-items-center'>
                                            {poet.cat && poet.cat.children.map(item =>
                                            (
                                                <Link key={item.id} to={`/category/${item.id}`} className="mt-2 text-decoration-none ">
                                                    <button  className='   button-link bg_dark color_white p-2 px-3'>

                                                        <img src={arrow_icon} alt="arrow icon" />


                                                        {item.title}

                                                    </button>
                                                </Link>

                                            )
                                            )}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </motion.section >
            } 
          
        </>
    );
};

export default Details;