import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Package from './Package';
import { motion } from 'framer-motion';

//import email_icon from '../images/email_icon.svg'
//import lock_icon from '../images/lock_icon.svg'

const Form = () => {

  const { setAuth } = useAuth();
  const { setAuthTokens } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    setError('');
    window.scrollTo(0,0);
  }, [data])

  const changeHandler = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const postHandler = async (e) => {
    e.preventDefault();
    console.log(data)
    await axios.post('http://farimahhasan.ir/api/login', data, {
      config: { withCredentials: true }
    })
      .then(response => {
        console.log(response, response?.headers, response?.status);
        const accessToken = response?.data?.token;
        console.log(accessToken)
        window.localStorage.setItem("isLoggedIn", true)

        //axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken
        setAuth({ data })
        setAuthTokens(accessToken)

        // axios.defaults.headers.common['Authorization']=`Bearer ${accessToken}`
        //localStorage.setItem('token',accessToken)
        navigate(from, { replace: true });
        setSuccess(true)
      })
      .catch(error => {
        if (error?.response) {
          setError('بدون پاسخ سرور')
        } else if (error?.response?.status === 400) {
          setError('پست الکترونیکی یا گذرواژه از دست رفته')

        } else if (error?.response?.status === 401) {
          setError('شما قبلا ثبت نام کردی ')
          
        } else {
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
      {
        success ?
          <p>موفق</p>
          :

          <>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              exit={{ opacity: 0 }}
              className='container vh-100 d-flex align-items-center ' id="login-section">
              <p>{error}</p>


              <form method='post' onSubmit={postHandler} autoComplete='off' className='form'>

                <div className='control block-cube block-input'>
                  <input type="text" placeholder="نام شما" className='color_white' name="name" value={data.name} onChange={changeHandler} />
                  <div className='bg-top'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='bg-right'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='bg'>
                    <div className='bg-inner'></div>
                  </div>
                </div>
                <div className='control block-cube block-input'>
                  <input type="email" placeholder=" پست الکترونیکی شما" className='color_white' required name="email" value={data.email} onChange={changeHandler} />
                  <div className='bg-top'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='bg-right'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='bg'>
                    <div className='bg-inner'></div>
                  </div>
                </div>
                <div className='control block-cube block-input'>
                  <input type="password" className='color_white' placeholder="گذرواژه شما" required name="password" value={data.password} onChange={changeHandler} minLength={8} />
                  <div className='bg-top'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='bg-right'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='bg'>
                    <div className='bg-inner'></div>
                  </div>
                </div>
                <button className='btn block-cube block-cube-hover' type='submit'>
                  <div className='bg-top'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='bg-right'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='bg'>
                    <div className='bg-inner'></div>
                  </div>
                  <div className='text'>
                    نام نویسی
                  </div>
                </button>

              </form>
            </motion.section>


          </>

      }</>
  );
};

export default Form;