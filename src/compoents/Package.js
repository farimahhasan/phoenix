import React, { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
const Package = () => {
    
    useEffect(()=>{
        const TOKEN = localStorage.getItem('token')

       console.log(TOKEN, 'this is token from package page') 
      console.log( typeof(TOKEN), 'typeof token')  

         axios.get('http://127.0.0.1:8000/api/package/1/order' , {
            headers:{
                //'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        })
            .then(response => {
                console.log(response.data, 'packages data ?');
            })
            .catch(error => {
              console.log(error)
            })
    },[])

    //axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

    return (
        <motion.section 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.75 , ease:"easeOut"}}
        exit={{opacity:0}}
        className='h-100'
        >
            <h3>salam</h3>
        </motion.section>
    );
};

export default Package;