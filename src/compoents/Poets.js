import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import arrow_icon from '../images/arrow-small-right 1.svg'

import { motion } from 'framer-motion';
import PayContext from '../context/PayProvider';

import { Modal, Button } from 'react-bootstrap';

const Poets = () => {

    const context = useContext(PayContext)


    const [poets, setPoets] = useState([]);
    const [search, setSearch] = useState("");

    // const [pay, setPay] = useState(false)

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

        // if(TOKEN){  

        // const getStatus = async () => {
        //     axios.get('http://farimahhasan.ir/api/package/1/status', {
        //         headers: {
        //             //'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${TOKEN}`
        //         }
        //     })
        //         .then(response => {
        //             console.log(response.data);
        //             if(response.data.status===true){
        //                 setPay(true)
        //                 window.localStorage.setItem("truePay", true)
        //               }else{
        //                   setPay(false)
        //                 window.localStorage.setItem("truePay", false)
        //               }
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })

        // }
        // getStatus()

        // }


        window.scrollTo(0, 0);
    }, [])


    // const searchHandeler = event => {
    //     setSearch(event.target.value)
    // }


    // const searchPoets = poets ? poets.map(p => (p.poets.filter(c => (c.nickname.includes(search.trim()))))) : ""
    // console.log(searchPoets)
    // console.log(search)

    const [isShow, invokeModal] = useState(false)
    const initModal = () => {
        return invokeModal(!isShow)
    }
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
                        exit={{ opacity: 0 }} className='row  m-0 p-0 mb-100 container mx-auto justify-content-center' id='poet-section' >
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
                                                        <Link to={`details${p.fullUrl}`} className="text-decoration-none">

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
                        {
                            !context.pay &&
                            <>
                                <div className='text-center mb-5'>
                                    <button onClick={initModal} className='button-poets button-link color_white heading mt-5 p-2 mx-auto'><img src={arrow_icon} alt="arrow icon" /> همه سخنوران </button>
                                </div>
                                <Modal show={isShow} >
                                    <Modal.Header closeButton className='btn-close-white' onClick={initModal}>

                                    </Modal.Header>
                                    <Modal.Body>
                                        برای دسترسی به همه سخنوران و قابلیت جستجوی شعر باید اشتراک تهیه کنید .
                                        برای تهیه اشتراک  ابتدا نام نویسی کنید .
                                        اگر اشتراک دارید کافی است وارد شوید.
                                    </Modal.Body>
                                    <Modal.Footer className='justify-content-center'>
                                        <Link to='/package' className='text-decoration-none'>
                                            <button onClick={initModal} className='button-poets button-link color_white heading p-2' >
                                                <img src={arrow_icon} alt="arrow icon" />
                                                ورود کاربر / نام نویسی
                                            </button>
                                        </Link>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        }


                        {
                            poets && context.pay &&
                            <>

                                {/* <div className="search-cat col-12 text-center mt-5">
                                    <div>
                                        <input dir="rtl" type="text" placeholder="جستجوی سخنور" required className="color_white" value={search} onChange={searchHandeler} />
                                    </div>
                                </div> */}


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
                                                                    <Link to={`details${p.fullUrl}`} className="text-decoration-none">

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
