import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import arrow_icon from '../images/arrow-small-right 1.svg'


const Poets = () => {

    const [poets, setPoets] = useState([]);
    const [pay,setPay]=useState(false)

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
        <section className='row m-0 p-0 mt-5' id='home-poet' >

            {
                poets && poets.map((c) => {
                    if (c.id === 0) {
                        return (
                            c.poets.map(p => {
                                return (
                                    <div data-aos="zoom-in" data-aos-duration="1000" className='mt-5 col-md col-sm-4 col-4 text-center' key={p.id}>
                                        <Link to={`details/${p.id}`} className="text-decoration-none">
                                            <img className='' src={`https://api.ganjoor.net${p.imageUrl}`} alt={p.name} />
                                            <h6 className='heading color_yellow mt-2'>{p.nickname}</h6>
                                        </Link>
                                    </div>
                                );
                            })
                        )
                    }
                })

            }

            <button className='button-home btn w-50 border color_yellow  p-2 px-3'><img src={arrow_icon} alt="arrow icon" /> همه سخنوران </button>

            {
                pay && 
                   <div className='col-12' id='centuries'>
                {
                    poets && poets.map((c) => {
                        if (c.id > 0) {
                            return (
                                <div key={c.id} className='border row justify-content-center' id={c.halfCenturyOrder}>
                                    <p>{c.name}</p>
                                    {c.poets.map(p => {
                                        return (
                                            <div data-aos="zoom-in" data-aos-duration="1000" className='mt-5 col-md col-sm-4 col-4 text-center' key={p.id}>
                                        <Link to={`details/${p.id}`} className="text-decoration-none">
                                            <img className='' src={`https://api.ganjoor.net${p.imageUrl}`} alt={p.name} />
                                            <h6 className='heading color_yellow mt-2'>{p.nickname}</h6>
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
         

        </section>
    );
};

export default Poets;
