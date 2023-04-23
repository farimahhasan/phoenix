import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import arrow_icon from '../images/arrow_icon.svg'
import axios from 'axios';


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
    }, [])


    return (
        <>

            {
                !poet.cat && <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark'>
                    <div className="spinner-grow color_yellow  " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <section data-aos="zoom-in" data-aos-duration="1000" className='row align-items-center ' id="details">

                <div className='col-md-2 col-sm-12 col-12 '>
                    <div className='row'>
                        <div className='col-12  '>
                            {poet.poet && <h2 className='heading color_yellow'>{poet.poet.name}</h2>}
                        </div>
                        <div className='col-12 ' >
                            {
                                poet.poet &&
                                <img src={`https://api.ganjoor.net${poet.poet.imageUrl}`} alt={poet.poet.name} />
                            }
                        </div>


                    </div>
                </div>

                <div className='col-md-6 col-sm-11 col-11   text-center '>
                    <p className='color_yellow bg_dark py-2' >
                        {poet.poet && poet.poet.description}
                    </p>
                </div>
                <div className='col-12 pb-5 d-flex flex-md-row flex-sm-column flex-column text-center'>
                    {poet.cat && poet.cat.children.map(item =>
                    (
                        <Link key={item.id} to={`/category/${item.id}`} className="text-decoration-none ">
                            <button key={item.id} className='button-home color_yellow  p-2 px-3'>

                                <img src={arrow_icon} alt="arrow icon" />


                                {item.title}

                            </button>
                        </Link>

                    )
                    )}

                </div>




            </section >
        </>
    );
};

export default Details;