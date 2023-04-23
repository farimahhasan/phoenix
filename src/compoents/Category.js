import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



const Category = () => {
    const params = useParams();

    const [cat, setCat] = useState({})

    const getCat = async () => {
        const response = await axios.get(`https://api.ganjoor.net/api/ganjoor/cat/${params.id}`);
        return response;
    }

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getCat();
            console.log(response.data)
            setCat(response.data)
        }
        fetchAPI();
    }, [])


    return (
        <>
         {
                !cat.cat && <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark'>
                    <div className="spinner-grow color_yellow  " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

       
        <section className='mt-5'>
            {cat.cat &&
                cat.cat.poems.map(item => (
                    <div key={item.id}>
                    <Link to={`/poem/${item.id}`} className='color_yellow'>{item.title} {item.excerpt}</Link >
                    </div>
                ))
            }

            {
                cat.cat && cat.cat.children &&
                cat.cat.children.map(item=>(
                    <div key={item.id} >
                    <Link to={`/category/${item.id}`}
                   onClick={getCat()} className='color_yellow'>{item.title}  {item.excerpt}</Link>
                    </div>

                )) 
            
            }

        </section>
        </>
    );
};

export default Category;