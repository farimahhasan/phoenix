import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';



const Category = () => {
    const params = useParams();
    console.log(params.fullUrl)

    const [cat, setCat] = useState({})
    const [search, setSearch] = useState("");



    const getCat = async () => {
        const response = await axios.get(`https://api.ganjoor.net/api/ganjoor/cat?url=/${params.fullUrl}/${params.fullUrl2}`);
        return response;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchAPI = async () => {
            const response = await getCat();
            console.log(response.data)
            setCat(response.data)
        }
        fetchAPI();
    }, [])


    const searchHandeler = event => {
        setSearch(event.target.value)
    }


    const searchCat = cat.cat ? cat.cat.poems.filter(c => c.excerpt.includes(search.trim())) : "";
    const searchChild = cat.cat ? cat.cat.children.filter(c => c.title.includes(search.trim())) : ""
    return (
        <>
            {
                !cat.cat ? <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark'>
                    <div className="spinner-grow color_white  " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>:
                  <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  exit={{ opacity: 0 }}
                  className='container row justify-content-center mx-auto mt-5 align-items-center' id='cat-section'>
  
                  <div class="search-cat col-12 text-center mb-5">
                      <div>
                          <input dir="rtl" type="text" placeholder="جستجو در عناوین" required className="color_white" value={search} onChange={searchHandeler} />
                      </div>
                  </div>
                  {cat.cat && searchCat &&
  
  
                      searchCat.map(item =>
                          <div className='col-md-5 col-sm-12 col-12 text-center ' key={item.id}>
                              <div className=" mx-auto category-component category-content d-flex justify-content-center align-items-center">
                                  <Link to={`/poem${cat.cat.fullUrl}/${item.urlSlug}`} className='color_white text-decoration-none'>{item.title} : {item.excerpt}</Link >
                              </div>
                          </div>
  
                      )
  
                      // cat.cat.poems.map(item => (
                      //     <div className='col-md-5 col-sm-12 col-12 text-center' key={item.id}>
                      //         <div className=" mx-auto category-component category-content">
                      //             <Link to={`/poem/${item.id}`} className='color_white text-decoration-none'>{item.title} : {item.excerpt}</Link >
                      //         </div>
                      //     </div>
                      // ))
                  }
  
                  {
                      cat.cat && searchChild &&
                      searchChild.map(item => (
  
                          <div className='col-md-5 col-sm-12 col-12 text-center ' key={item.id}>
                              <div className=" mx-auto category-component category-content d-flex align-items-center justify-content-center">
                                  <Link to={`/category${item.fullUrl}`} onClick={getCat()}
                                      className='color_white text-decoration-none'>{item.title} {item.excerpt}</Link >
                              </div>
                          </div>
                      ))
  
                  }
  
              </motion.section>

            }


          
        </>
    );
};

export default Category;