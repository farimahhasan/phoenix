import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const CategoryChild = () => {

    const params = useParams();

    const [child, setChild] = useState({})
    const [search, setSearch] = useState("");

    const getCat = async () => {
        const response = await axios.get(`https://api.ganjoor.net/api/ganjoor/cat?url=/${params.fullUrl}/${params.fullUrl2}/${params.fullUrl3}`);
        return response;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchAPI = async () => {
            const response = await getCat();
            setChild(response.data)
        }
        fetchAPI();
    }, [])

    const searchHandeler = event => {
        setSearch(event.target.value)
    }

    const searchChild = child.cat ? child.cat.poems.filter(c => c.title.includes(search.trim())) : "";

    return (
        <>
            {
                !child.cat ? <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark'>
                    <div className="spinner-grow color_white  " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        exit={{ opacity: 0 }}
                        className='container row justify-content-center mx-auto mt-5 align-items-center mb-100' id='cat-section'>

                        <div className="search-cat col-12 text-center mb-5">
                            <div>
                                <input dir="rtl" type="text" placeholder="جستجو در عناوین" required className="color_white" value={search} onChange={searchHandeler} />
                            </div>
                        </div>

                        {child.cat && searchChild &&
                            searchChild.map(item =>
                                <div className='col-md-5 col-sm-12 col-12 text-center ' key={item.id}>
                                    <Link to={`/poem-child${child.cat.fullUrl}/${item.urlSlug}`} className='color_white text-decoration-none'>
                                        <div className=" mx-auto category-content d-flex justify-content-center align-items-center">
                                            {item.title}
                                        </div>
                                    </Link >
                                </div>
                            )
                        }

                    </motion.section>
            }
        </>
    );
};

export default CategoryChild;