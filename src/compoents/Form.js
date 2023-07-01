import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { validate } from './validate';

const Form = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [errorValidation, setErrorValidation] = useState({});

  const [blur, setBlur] = useState({})
  const blurHandler = event => {
    setBlur({ ...blur, [event.target.name]: true })
  }

  useEffect(() => {
    setErrorValidation(validate(data));
  }, [data, blur])

  useEffect(() => {
    setError('');
    window.scrollTo(0, 0);
  }, [])


  const changeHandler = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const postHandler = async (e) => {
    e.preventDefault();
    if (Object.keys(errorValidation).length) {
      setBlur({
        email: true,
        password: true,
      })
    }
    else {
      await axios.post('http://farimahhasan.ir/api/login', data, {
        config: { withCredentials: true }
      })
        .then(response => {
          const accessToken = response?.data?.token;
          localStorage.setItem("token", accessToken);
          window.localStorage.setItem("isLoggedIn", true)
          window.location.reload()
          setSuccess(true)
        })
        .catch(error => {
          if (error?.response?.status === 400) {
            setError('پست الکترونیکی یا گذرواژه از دست رفته')
          } else if (error?.response?.status === 401) {
            setError(' گذرواژه اشتباه است  ')
          } else {
            setError('نام نویسی ناموفق بود')
          }
        })
    }
  }

  return (
    <>
      {
        success ?
          <p className='text-center'>موفق</p>
          :

          <>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              exit={{ opacity: 0 }}
              className='container d-flex align-items-center flex-column justify-content-center vh-100' id="login-section">
              <p className='text-danger mt-3'>{error}</p>

              <form method='post' noValidate onSubmit={postHandler} autoComplete='off' className='form'>

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
                  <input type="email" placeholder=" پست الکترونیکی شما" name="email" value={data.email} onChange={changeHandler} onBlur={blurHandler}
                    className='color_white'
                  />
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
                {errorValidation.email && blur.email && <span className='color_white'>{errorValidation.email}</span>}
                <div className='control block-cube block-input mt-4'>
                  <input type="password" className='color_white' placeholder="گذرواژه شما" name="password" value={data.password} onChange={changeHandler} onBlur={blurHandler} />
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
                {errorValidation.password && blur.password && <span className='color_white'>{errorValidation.password}</span>}
                <button className='btn block-cube block-cube-hover mt-4' type='submit' >
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
                    ورود کاربر / نام نویسی
                  </div>
                </button>

              </form>
            </motion.section>
          </>
      }</>
  );
};

export default Form;