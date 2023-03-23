import React from 'react';
import person_icon from '../images/person_icon.svg'
import bag_icon from '../images/bag_icon.svg'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <header className='row align-items-center mt-2 '>
                <div className='col-4 '>
                    <nav>
                        <ul className='m-0 p-0'>
                            <li>
                               <a href='#' className='text-decoration-none color_yellow'>صفحه اصلی</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-4 text-center'>
                  <h1 className='color_yellow m-0 p-0'>
                   <img src={logo} alt="logo" className='logo' />
                  </h1>
                </div>
                <div className='col-4 text-start'>
                <img src={person_icon} alt="person icon" className='ms-1'/>
                <img src={bag_icon} alt="bag icon" className='me-1'/>

                </div>
        </header>
    );
};

export default Header;