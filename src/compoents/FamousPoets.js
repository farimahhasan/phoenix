import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import arrow_icon from '../images/arrow-small-right 1.svg'


const FamousPoets= () => {

    const[poets,setPoets]=useState([]) 
  
    const getPoets= async() =>{
        const response=await axios.get(`https://api.ganjoor.net/api/ganjoor/poets`);
        return response;
    }
  
    useEffect(()=>{
        const fetchAPI= async () =>{
           const response=await getPoets();
           console.log(response.data)
           setPoets(response.data)
        }
        fetchAPI();
    },[])


    return (
        <section className='row mt-5' id='home-poet' >
           
       

{
    poets && poets.map((poet)=>(
    
      poet.id<8 &&
            <div  data-aos="zoom-in"  data-aos-duration="1000" className='mt-5 col-md col-sm-4 col-4 text-center' key={poet.id}>
                <Link to={`details/${poet.id}`} className="text-decoration-none">
                   <img className='' src={`https://api.ganjoor.net${poet.imageUrl}`} alt={poet.name} />
                  <h6 className='heading color_yellow mt-2'>{poet.nickname}</h6>
                </Link>
            </div>
    ))
}

<div className='col-12 my-5'>
<button className='button-home color_yellow  p-2 px-3'><img src={arrow_icon} alt="arrow icon" /> همه سخنوران </button>
</div>
      
            
        </section>
    );
};

export default FamousPoets;
