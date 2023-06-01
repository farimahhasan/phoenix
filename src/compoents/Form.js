import React, { useState, useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

//import email_icon from '../images/email_icon.svg'
//import lock_icon from '../images/lock_icon.svg'

const Form = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(location.state?.from?.pathname)

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState('')


    useEffect(() => {
        setError('');
    }, [data])

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const postHandler = async (e) => {
        e.preventDefault();
        console.log(data)
        await axios.post('http://farimahhasan.ir/api/login',data )
            .then(response => {
                console.log(response, response?.headers, response?.status);
                const accessToken = response?.data?.token;
                //axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken
                setAuth({ data, accessToken })
                navigate(from, { replace: true });
            })
            .catch(error => {
                if(error?.response){
                    setError('بدون پاسخ سرور')
                 }else if(error?.response?.status === 400){
                    setError('پست الکترونیکی یا گذرواژه از دست رفته')
        
                 }else if(error?.response?.status === 401){
                    setError('غیرمجاز')
                 }else{
                    setError('نام نویسی ناموفق بود')
                 }
            })
        /*         try {
                    
        
                    const response=await axios.post('http://farimahhasan.ir/api/login',
                      JSON.stringify({data}),
                       {
                        withCredentials:true
                       }
                    );
                    console.log(JSON.stringify(response?.data))
                    const accessToken=response?.data?.remember_token;
                       setAuth({data, accessToken})
                  
                    setSuccess(true)
                }
                catch (err) {
                 if(!err?.response){
                    setError('بدون پاسخ سرور')
                 }else if(err.response?.status === 400){
                    setError('پست الکترونیکی یا گذرواژه از دست رفته')
        
                 }else if(err.response?.status === 401){
                    setError('غیرمجاز')
                 }else{
                    setError('نام نویسی ناموفق بود')
                 }
                }
         */
    }


    return (
 
                        <>
                            <p>{error}</p>
                            <form method='post' onSubmit={postHandler} className='row justify-content-center'>
                                <div className="col-12   ">
                                    <div className='row justify-content-center'>
                                        <input type="text" placeholder="نام شما" className='color_yellow' name="name" value={data.name} onChange={changeHandler} />

                                        <div className='col-md-3 col-sm-10 col-10 c-in d-flex align-items-center justify-content-between'>
                                            {/* <img src={email_icon} alt='email icon' /> */}
                                            <input type="email" placeholder=" پست الکترونیکی شما" className='color_yellow' required name="email" value={data.email} onChange={changeHandler} />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className=" col-12  ">
                                    <div className='row justify-content-center'>
                                        <div className='col-md-3 col-sm-10 col-10 c-in d-flex align-items-center justify-content-between'>
                                            {/* <img src={lock_icon} alt='lock icon' /> */}
                                            <input type="password" className='color_yellow' placeholder="گذرواژه شما" required name="password" value={data.password} onChange={changeHandler} />
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className='col-12 text-center'>
                                    <button className="bg_yellow color_dark">ارسال</button>
                                </div>

                            </form>
       
        </>
    );
};

export default Form;