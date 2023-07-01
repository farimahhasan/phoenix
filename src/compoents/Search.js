import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';


const Search = () => {

    const [searchInput, setSearch] = useState("");
    const [searchResult, setsearchResult] = useState([])
    const [loading, setLoading] = useState(false)

    const saveSearchHandeler = event => {
        setSearch(event.target.value)

    }

    const searchHandler = async () => {
        console.log("Search: " + searchInput)
        setLoading(true)
        await axios.get(`https://api.ganjoor.net/api/ganjoor/poems/search?term=${searchInput}`)
            .then(response => {
                console.log(response.data)
                setLoading(false)
                setsearchResult(response.data)
            })
            .catch(error => console.log(error))
        console.log('hi')
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className='container row justify-content-center mx-auto mt-5 align-items-center mb-100' id='cat-section'>

            <div className="search-cat col-12 text-center mb-5">
                <div>
                    <input dir="rtl" type="text" placeholder="ّبعد از نوشتن ، دکمه enter را بزنید" required className="color_white"

                        value={searchInput}

                        onChange={saveSearchHandeler}

                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                searchHandler()
                            }
                        }}
                    />
                </div>
            </div>

            {
                searchResult && !loading ?
                    searchResult.map((item) => (
                        <div className='col-md-6 col-sm-12 col-12 text-center ' key={item.id}>
                            <Link to={item.fullUrl.split("/").length === 4 ? `/poem${item.fullUrl}` : `/poem-child${item.fullUrl}`}
                                className='color_white text-decoration-none'>
                                <div className=" mx-auto category-content d-flex align-items-center justify-content-center">
                                    {item.fullTitle}
                                </div>
                            </Link>
                        </div>
                    )) :
                    <div className='container-spinner d-flex align-items-center mt-5 w-100 justify-content-center bg_dark'>
                        <div className="spinner-grow color_white  " role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }

        </motion.section>
    );
};

export default Search;