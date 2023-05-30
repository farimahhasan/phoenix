import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import arrow_icon from '../images/arrow-small-right 1.svg'





const Poem = () => {
    const params = useParams();


    const [poem, setPoem] = useState({})

    const getPoem = async () => {
        const response = await axios.get(`https://api.ganjoor.net/api/ganjoor/poem/${params.id}`);
        return response;
    }

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getPoem();
            console.log(response.data)
            setPoem(response.data)
        }
        fetchAPI();
    }, [])

    return (
        <>
            {
                !poem.htmlText && <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark'>
                    <div className="spinner-grow color_yellow  " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            <section className='mt-5'>
                <div className='d-flex justify-content-md-start justify-content-sm-center justify-content-center'>

                    {
                        poem.next &&
                        <Link key={poem.next.id} to={`/poem/${poem.next.id}`} onClick={getPoem()} className="text-decoration-none ">
                            <button className='button-home color_yellow  p-2 px-3'>

                                <img src={arrow_icon} alt="arrow icon" />


                                {poem.next.title} {/* : {poem.previous.excerpt}
 */}
                            </button>
                        </Link>

                    }
                </div>

                {
                    poem.htmlText && <div className='color_yellow mt-5' dangerouslySetInnerHTML={{ __html: `${poem.htmlText}` }}></div>

                }

                <div className='d-flex justify-content-md-end justify-content-sm-center justify-content-center mt-5'>
                    {
                        poem.previous &&
                        <Link key={poem.previous.id} to={`/poem/${poem.previous.id}`} onClick={getPoem()} className="text-decoration-none ">
                            <button className='button-home color_yellow  p-2 px-3 '>
                                {poem.previous.title} {/* : {poem.previous.excerpt} */}
                                <img src={arrow_icon} className='previous-poem-icon' alt="arrow icon" />
                            </button>
                        </Link>

                    }
                </div>

                {
                    poem.recitations && poem.recitations.map((item) => (
                        <div key={item.id}>
                            <audio controls src={item.mp3Url} ></audio>
                            <p className='color_yellow'>{item.audioArtist}</p>
                        </div>
                    ))
                }


            </section>
        </>

    );
};

export default Poem;