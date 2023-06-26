import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';


const Search = () => {

    const[searchInput,setSearch]=useState("");
    const[searchResult,setsearchResult]=useState([]) 
  
    const saveSearchHandeler= event=>{
        setSearch(event.target.value)
    
    }
  
   const searchHandler=async ()=>{
        console.log("Search: " + searchInput) 
  
        await axios.get(`https://api.ganjoor.net/api/ganjoor/poems/search?term=${searchInput}`)
        .then (response => {
            console.log(response.data)
            setsearchResult(response.data)
     })}

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className='container row justify-content-center mx-auto mt-5 align-items-center' id='cat-section'>


            <div className="search-cat col-12 text-center mb-5">
                <div>
                    <input dir="rtl" type="text" placeholder="بعد از نوشتن  enter را بزنید" required className="color_white" 
                    
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

            


        </motion.section>
    );
};

export default Search;