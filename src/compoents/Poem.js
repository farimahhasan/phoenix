import React , {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';






const Poem = () => {
    const params = useParams();
     

    const[poem,setPoem]=useState({}) 
  
    const getPoem= async() =>{
        const response=await axios.get(`https://api.ganjoor.net/api/ganjoor/poem/${params.id}`);
        return response;
    }
  
    useEffect(()=>{
        const fetchAPI= async () =>{
           const response=await getPoem();
           console.log(response.data)
           setPoem(response.data)
        }
        fetchAPI();
    },[])

    return (
        <>
                 {
                !poem.htmlText && <div className='container-spinner position-absolute d-flex align-items-center vh-100 w-100 justify-content-center bg_dark'>
                    <div className="spinner-grow color_yellow  " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

        <section className='mt-5'>


{
   poem.htmlText && <div className='color_yellow' dangerouslySetInnerHTML={{__html: `${poem.htmlText}`}}></div>
   
}




{
    poem.recitations && poem.recitations.map((item)=>(
        <div key={item.id}>
        <audio controls src={item.mp3Url} ></audio>
          <p className='color_yellow'>{item.audioArtist}</p>
        </div>
    ))
}


        </section>
        </>

    );
};

export default Poem;