import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from 'axios';
import { json } from 'react-router-dom';
//import email_icon from '../images/email_icon.svg'
//import lock_icon from '../images/lock_icon.svg'

const Form = () => {

    const { setAuth } = useContext(AuthContext)

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState('')

    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setError('');
    }, [data])

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const postHandler = async (e) => {
        e.preventDefault();
        //console.log(data)
        try {
            // await axios.post('http://farimahhasan.ir/api/login', { data }, {
            //     withCredentials: true,
            // })
            //     .then(response => {
            //      console.log(response, response.headers, response.status);
            //      const accessToken=response.data.remember_token;
            //      setAuth({data, accessToken})
            //     }
            //     )

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
            setError('missing email or password ')
         }else if(err.response?.status === 401){
            setError('unauthorized')
         }else{
            setError('login faild')
         }
        }

    }


    return (
        <>
            {
                success ? (<p>با موفقیت وارد شدید</p>)
                    : (
                    <>
                    <p>{error}</p>
                    <form onSubmit={postHandler} className='row justify-content-center'>
                        <div className="col-12   ">
                            <div className='row justify-content-center'>
                                <input type="text" placeholder="اسم شما" className='color_yellow' required name="name" value={data.name} onChange={changeHandler} />

                                <div className='col-md-3 col-sm-10 col-10 c-in d-flex align-items-center justify-content-between'>
                                    {/* <img src={email_icon} alt='email icon' /> */}
                                    <input type="email" placeholder="ایمیل شما" className='color_yellow' required name="email" value={data.email} onChange={changeHandler} />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className=" col-12  ">
                            <div className='row justify-content-center'>
                                <div className='col-md-3 col-sm-10 col-10 c-in d-flex align-items-center justify-content-between'>
                                    {/* <img src={lock_icon} alt='lock icon' /> */}
                                    <input type="password" className='color_yellow' placeholder="رمز عبور شما" required name="password" value={data.password} onChange={changeHandler} />
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className='col-12 text-center'>
                            <button className="bg_yellow color_dark">ارسال</button>
                        </div>

                    </form>
                    </>
                    )
            }
        </>
    );
};

export default Form;