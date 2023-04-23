import React from 'react';

import email_icon from '../images/email_icon.svg'
import lock_icon from '../images/lock_icon.svg'

const Form = () => {
    return (
        <form action="" className='row justify-content-center'>

            <div className="col-12   ">
                <div className='row justify-content-center'>
                    <div className='col-md-3 col-sm-10 col-10 c-in d-flex align-items-center justify-content-between'>
                        <img src={email_icon} alt='email icon' />
                        <input type="email" placeholder="ایمیل شما" className='color_yellow' name="email" required />
                    </div>
                </div>
            </div>
            <br />
            <div className=" col-12  ">
                <div className='row justify-content-center'>
                    <div className='col-md-3 col-sm-10 col-10 c-in d-flex align-items-center justify-content-between'>
                        <img src={lock_icon} alt='lock icon' />
                        <input type="password" className='color_yellow' placeholder="رمز عبور شما" name="pass" required />
                    </div>
                </div>
            </div>

            <br />
            <div className='col-12 text-center'>
                <button type="submit" className="bg_yellow color_dark">ارسال</button>
            </div>

        </form>
    );
};

export default Form;