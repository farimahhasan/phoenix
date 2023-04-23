import React from 'react';
import { Link} from 'react-router-dom';

import home from '../images/home_icon.svg'
import person_icon from '../images/person_icon.svg'
import bag_icon from '../images/bag_icon.svg'
import logo from '../images/logo.png'


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " dir='ltr'>
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img src={logo} alt="logo" className='logo' />

                    </Link>

                    <div className="navbar-toggler menu btn15 " data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="icon"></div>
                        </div>
                    <div className="collapse navbar-collapse  text-end mt-md-0 mt-sm-2 mt-2" id="navbarText">
                        <span className="">
                            <input id='search-input' type='text' placeholder='جستجو' dir='rtl' className='p-1 ' />
                        </span>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-md-0 mt-sm-3 mt-3" dir='rtl'>
                            <li className="nav-item ms-2">
                                <img src={home} className='ms-2' />
                                <Link to={'/'} className=' text-decoration-none color_yellow'>صفحه اصلی</Link>
                            </li>
                            <li className="nav-item mx-2">
                            <img src={person_icon} alt="person icon" className='ms-2'/>
                                <Link to={'/login'} className=' text-decoration-none color_yellow'>ورود کاربر</Link>                            </li>
                            <li className="nav-item mx-2">
                            <img src={bag_icon} className='ms-2' />
                                <a href='#' className=' text-decoration-none color_yellow'>سبد خرید</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;