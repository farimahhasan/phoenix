import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import arrow_icon from '../images/arrow-small-right 1.svg'

import { motion } from 'framer-motion';


const Poets = () => {

    const [poets, setPoets] = useState([]);
    const [pay, setPay] = useState(true)

    // const getPoets = async () => {
    //     const response = await axios.get(`https://api.ganjoor.net/api/ganjoor/poets`);
    //     return response;
    // }

    const getPoets = async () => {
        const response = await axios.get('https://api.ganjoor.net/api/ganjoor/centuries')
        return response;
    }

    useEffect(() => {
        // const fetchAPI = async () => {
        //     const response = await getPoets();
        //     console.log(response.data)
        //     setPoets(response.data)
        // }
        // fetchAPI();

        const fetchAPI = async () => {
            const response = await getPoets();
            console.log(response.data)
            setPoets(response.data)

        }
        fetchAPI();

    }, [])


    return (
        <>
            {
                !poets[0] ? <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark'>
                    <div className="spinner-grow color_white " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                    :
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        exit={{ opacity: 0 }} className='row  m-0 p-0 mb-5 container mx-auto justify-content-center' id='home-poet' >
                        <>
                            <h3 className='heading text-center mt-5'>سخنوران پر مخاطب</h3>
                            {

                                poets && poets.map((c) => {
                                    if (c.id === 0) {
                                        return (
                                            c.poets.map(p => {
                                                return (
                                                    //  <div className='mt-5 col-md col-sm-4 col-4 text-center card-poets' >
                                                    //      <Link to={`details/${p.id}`} className="text-decoration-none">
                                                    //          <img className='' src={`https://api.ganjoor.net${p.imageUrl}`} alt={p.name} />
                                                    //          <h6 className='heading color_white  mt-2'>{p.nickname}</h6>
                                                    //      </Link>
                                                    //  </div>

                                                    <div className="card-poets position-relative mt-4 col-md col-sm-4 col-5 text-center" key={p.id}>
                                                        <Link to={`/details${p.fullUrl}`} className="text-decoration-none">

                                                            <div className="face face1">
                                                                <img className='' src={`https://api.ganjoor.net${p.imageUrl}`} alt={p.name} />

                                                            </div>
                                                            <div className="face face2">
                                                                <h6 className='heading color_white  mt-2'>{p.nickname}</h6>

                                                            </div>
                                                        </Link>
                                                    </div>


                                                );
                                            })
                                        )
                                    }
                                })
                            }
                        </>

                        <div className='text-center'>
                            <button className='button-poets button-link color_white heading mt-5 p-2 mx-auto'><img src={arrow_icon} alt="arrow icon" /> همه سخنوران </button>

                        </div>



                        {
                            pay &&
                            <>

                                <div class="search-cat col-12 text-center mt-5">
                                    <div>
                                        <input dir="rtl" type="text" placeholder="جستجوی سخنور" required className="color_white" />
                                    </div>
                                </div>

                                <h3 className='heading text-center mt-5'>دسته‌بندی بر اساس قرن</h3>
                                <div className='row align-items-center justfiy-content-center flex-wrap mt-4 mx-auto'>
                                    <div className='col-md-2 col-sm-3 col-3 '><a href='#c1' className='button-link text-decoration-none color_white p-2 heading '> سوم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2 '><a href='#c2' className='button-link text-decoration-none color_white p-2 heading'> چهارم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c3' className='button-link text-decoration-none color_white p-2 heading'> پنچم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c4' className='button-link text-decoration-none color_white p-2 heading'> ششم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c5' className='button-link text-decoration-none color_white p-2 heading'> هفتم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c6' className='button-link text-decoration-none color_white p-2 heading'> هشتم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3  p-2'><a href='#c7' className='button-link text-decoration-none color_white p-2 heading'> نهم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c8' className='button-link text-decoration-none color_white p-2 heading'> دهم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c9' className='button-link text-decoration-none color_white p-2 heading'> یازدهم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c10' className='button-link text-decoration-none color_white p-2 heading'> دوازدهم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c11' className='button-link text-decoration-none color_white p-2 heading'> سیزدهم</a>
                                    </div>
                                    <div className='col-md-2 col-sm-3 col-3 p-2'><a href='#c12' className='button-link text-decoration-none color_white p-2 heading'> چهاردهم</a>
                                    </div>


                                </div>


                                <div className='col-12 mt-4' id='centuries'>
                                    {
                                        poets && poets.map((c) => {
                                            if (c.id > 0) {
                                                return (
                                                    <div key={c.id} className=' row justify-content-center mb-4' id={`c${c.halfCenturyOrder}`}>
                                                        <h4 className='text-center heading mt-5'>{c.name}</h4>
                                                        {c.poets.map(p => {
                                                            return (
                                                                <div className="card-poets position-relative mt-5 col-md-2 col-sm-4 col-5 text-center" key={p.id}>
                                                                    <Link to={`details/${p.id}`} className="text-decoration-none">

                                                                        <div className="face face1">
                                                                            <img className='' src={`https://api.ganjoor.net${p.imageUrl}`} alt={p.name} />

                                                                        </div>
                                                                        <div className="face face2">
                                                                            <h6 className='heading color_white  mt-2'>{p.nickname}</h6>

                                                                        </div>
                                                                    </Link>


                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )

                                            }
                                        })
                                    }
                                </div>

                            </>
                        }




                    </motion.section>
            }
        </>
    );
};

export default Poets;
