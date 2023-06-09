import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import arrow_icon from '../images/arrow-small-right 1.svg'
// import copy from '../images/copy-alt.svg'
import { motion } from 'framer-motion';

const Poem = () => {

    const params = useParams();
    const [poem, setPoem] = useState({})

    const getPoem = async () => {
        const response = await axios.get(`https://api.ganjoor.net/api/ganjoor/poem?url=/${params.fullUrl}/${params.fullUrl2}/${params.fullUrl3}`);
        return response;
    }

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getPoem();
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
                </div> :
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        exit={{ opacity: 0 }}
                        className='mt-5 container row mx-auto justify-content-center position-relative mb-100' id="poem-section">
                        <div className='d-flex flex-md-row flex-sm-column flex-column text-center justify-content-md-between justify-content-sm-center justify-content-center'>
                            {
                                poem.next &&
                                <Link key={poem.next.id} to={`/poem${poem.category.cat.fullUrl}/${poem.next.urlSlug}`} onClick={getPoem()} className="text-decoration-none mx-md-0 mx-sm-auto mx-auto ">
                                    <button className=' color_white  button-link  p-2 px-3'>
                                        <img src={arrow_icon} alt="arrow icon" />
                                        {poem.next.title}
                                    </button>
                                </Link>

                            }

                            {/* <div className='d-flex justify-content-center mt-md-0 mt-sm-4 mt-4'>
                                <span className='button-link p-2 ms-2 poem-icon bg_white '
                                    onClick={() => window.navigator.clipboard.writeText(`${poem.plainText}`)}
                                >

                                    <img src={copy} alt='copy icon' />
                                    <span className='color_dark'>رونوشت</span>
                                </span>
                            </div> */}
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
                                <Link key={poem.previous.id} to={`/poem${poem.category.cat.fullUrl}/${poem.previous.urlSlug}`} onClick={getPoem()} className="text-decoration-none ">
                                    <button className='color_white pereviouse button-link  p-2 px-3 '>
                                        {poem.previous.title} {/* : {poem.previous.excerpt} */}
                                        <img src={arrow_icon} className='previous-poem-icon' alt="arrow icon" />
                                    </button>
                                </Link>

                            }
                        </div>

                        {
                            poem.verses[0].coupletSummary !== null &&
                            <>
                                <h4 className='text-center color-white mb-3'>برگردان به زبان ساده</h4>
                                {
                                    poem.verses.map(v => (
                                        <div className='color_white mt-3 text-center' key={v.id}>
                                            {v.coupletSummary}<br />
                                        </div>
                                    ))}
                            </>
                        }

                        {
                            poem.recitations && poem.recitations.map((item, i) => (
                                <div key={item.id} className="mt-5 text-center col-md-6 col-sm-12 col-12">
                                    <audio controls id={`audio-${i + 1}"`}>
                                        <source src={item.mp3Url} />
                                    </audio>
                                    <p className='color_white '>{item.audioArtist}</p>
                                </div>
                            ))
                        }

                        {/* <Link to={'/test'} className='text-decoration-none color_white'>
                        <h2 className='text-center'> تست خوانش</h2>
                     </Link> */}
                    </motion.section>
            }
        </>

    );
};

export default Poem;