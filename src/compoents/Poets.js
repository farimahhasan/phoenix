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
                        exit={{ opacity: 0 }} className='row  m-0 p-0 container mx-auto justify-content-center' id='home-poet' >
                        <>
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
                                                    <div className="card-poets position-relative mt-5 col-md col-sm-4 col-5 text-center" key={p.id}>
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
                                            })
                                        )
                                    }
                                })

                            }
                        </>

                        <div className='text-center'>
                            <button className='button-poets button-link color_white heading mt-5 p-2'><img src={arrow_icon} alt="arrow icon" /> همه سخنوران </button>

                        </div>

                        <div className='d-flex mt-3 align-items-center text-center justfiy-content-center flex-wrap'>
                        <a href='#c1' className='button-link text-decoration-none color_white p-2 heading'>قرن سوم</a>
                        <a href='#c2' className='button-link text-decoration-none color_white p-2 heading'>قرن چهارم</a>
                        <a href='#c3' className='button-link text-decoration-none color_white p-2 heading'>قرن پنچم</a>
                        <a href='#c4' className='button-link text-decoration-none color_white p-2 heading'>قرن ششم</a>
                        <a href='#c5' className='button-link text-decoration-none color_white p-2 heading'>قرن هفتم</a>
                        <a href='#c6' className='button-link text-decoration-none color_white p-2 heading'>قرن هشتم</a>
                        <a href='#c7' className='button-link text-decoration-none color_white p-2 heading'>قرن نهم</a>
                        <a href='#c8' className='button-link text-decoration-none color_white p-2 heading'>قرن دهم</a>
                        <a href='#c9' className='button-link text-decoration-none color_white p-2 heading'>قرن یازدهم</a>
                        <a href='#c10' className='button-link text-decoration-none color_white p-2 heading'>قرن دوازدهم</a>
                        <a href='#c11' className='button-link text-decoration-none color_white p-2 heading'>قرن سیزدهم</a>
                        <a href='#c12' className='button-link text-decoration-none color_white p-2 heading'>قرن چهاردهم</a>
 
                        </div>
                        {
                            pay &&
                            <div className='col-12 mt-5' id='centuries'>
                                {
                                    poets && poets.map((c) => {
                                        if (c.id > 0) {
                                            return (
                                                <div key={c.id} className=' row justify-content-center' id={`c${c.halfCenturyOrder}`}>
                                                    <p className='text-center heading mt-5'>{c.name}</p>
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
                        }

                        


                    </motion.section>
            }
        </>
    );
};

export default Poets;
