import React, { useEffect } from 'react';
import axios from 'axios';

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
        <div>
            <h3>salam</h3>
        </div>
    );
};

export default Package;