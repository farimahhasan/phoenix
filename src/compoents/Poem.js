import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import arrow_icon from '../images/arrow-small-right 1.svg'

import { motion } from 'framer-motion';







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
                !poem.htmlText ? <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark '>
                    <div className="spinner-grow color_white  " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>:
                 <motion.section
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:0.75 , ease:"easeOut"}}
               exit={{opacity:0}}
            className='mt-5 container row mx-auto justify-content-center position-relative'id="poem-section">
                <div className='d-flex justify-content-md-start justify-content-sm-center justify-content-center'>

                    {
                        poem.next &&
                        <Link key={poem.next.id} to={`/poem/${poem.next.id}`} onClick={getPoem()} className="text-decoration-none ">
                            <button className=' color_white  button-link  p-2 px-3'>

                                <img src={arrow_icon} alt="arrow icon" />


                                {poem.next.title} {/* : {poem.previous.excerpt}
 */}
                            </button>
                        </Link>

                    }
                </div>


<div className='col-md-8 co-sm-11 col-11'>
                <div className="paper paper-dark ">
                    <div className="tape-section"></div>
                     {poem.htmlText && <div className='color_white mt-3 w-100' dangerouslySetInnerHTML={{ __html: `${poem.htmlText}` }}></div>
                    } 
                    <div className="tape-section"></div>
                </div>
</div>




                <div className='d-flex justify-content-md-end justify-content-sm-center justify-content-center mt-5'>
                    {
                        poem.previous &&
                        <Link key={poem.previous.id} to={`/poem/${poem.previous.id}`} onClick={getPoem()} className="text-decoration-none ">
                            <button className='color_white pereviouse button-link  p-2 px-3 '>
                                {poem.previous.title} {/* : {poem.previous.excerpt} */}
                                <img src={arrow_icon} className='previous-poem-icon' alt="arrow icon" />
                            </button>
                        </Link>

                    }
                </div>

                {
                    poem.recitations && poem.recitations.map((item , i) => (
                        <div key={item.id} className="mt-5 text-center">
                            <audio controls src={item.mp3Url} id={`audio-${i+1}"`}></audio>
                            <p className='color_white '>{item.audioArtist}</p>
                        </div>
                    ))
                }



            </motion.section>
            }

           
        </>

    );
};

export default Poem;