import React from 'react';
import { NavLink  } from 'react-router-dom';

import home from '../images/home 1.svg'
import person_icon from '../images/user 1.svg'
import bag_icon from '../images/shopping-bag (1) 1.svg'
import search from '../images/search 1.svg'


const Header = () => {

//   const goToTop = () => {
//    window.scrollTo({
//        top: 0,
//        behavior: 'smooth',
//    });
// };


   return (
      // <header>
      //     <nav className="navbar navbar-expand-lg bg-body-tertiary " dir='ltr'>
      //         <div className="container">
      //             <Link className="navbar-brand" to={'/'}>
      //                 <img src={logo} alt="logo" className='logo' />

      //             </Link>

      //             <div className="navbar-toggler menu btn15 " data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      //                     <div className="icon"></div>
      //                 </div>
      //             <div className="collapse navbar-collapse  text-end mt-md-0 mt-sm-2 mt-2" id="navbarText">
      //                 <span className="">
      //                     <input id='search-input' type='text' placeholder='جستجو' dir='rtl' className='p-1 ' />
      //                 </span>
      //                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-md-0 mt-sm-3 mt-3" dir='rtl'>
      //                     <li className="nav-item ms-2">
      //                         <img src={home} className='ms-2' />
      //                         <Link to={'/'} className=' text-decoration-none color_yellow'>صفحه اصلی</Link>
      //                     </li>
      //                     <li className="nav-item mx-2">
      //                     <img src={person_icon} alt="person icon" className='ms-2'/>
      //                         <Link to={'/login'} className=' text-decoration-none color_yellow'>ورود کاربر</Link>                            </li>
      //                     <li className="nav-item mx-2">
      //                     <img src={bag_icon} className='ms-2' />
      //                         <a href='#' className=' text-decoration-none color_yellow'>سبد خرید</a>
      //                     </li>
      //                 </ul>

      //             </div>
      //         </div>
      //     </nav>

      // </header>
      <header className='position-relative'>
         <nav className='d-flex align-items-center position-fixed justify-content-center'>
            <ul className='m-0 p-0 d-flex flex-md-column flex-sm-row flex-row list-unstyled'>
               <li>
                  <NavLink to={'/'}
                     className={(navData) => navData.isActive ? "active-link  text-decoration-none header-link position-relative" : " text-decoration-none header-link position-relative"}>
                     <img src={home} alt="home icon" />
                     <span className='position-absolute'>صفحه اصلی</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/login'} className={(navData) => navData.isActive ? "active-link text-decoration-none header-link position-relative" : " text-decoration-none header-link position-relative"}>
                     <img src={person_icon} alt="user icon" />
                     <span className='position-absolute'>نام نویسی</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to={'/package'} className={(navData) => navData.isActive ? "active-link text-decoration-none header-link position-relative" : " text-decoration-none header-link position-relative"}>
                     <img src={bag_icon} alt="bag icon" />
                     <span className='position-absolute'>سبد خرید</span>
                  </NavLink>
               </li>
               {/* <li>
                   <Link to={'/search'} className='text-decoration-none'>
                   <img src={search} alt="search icon" />
                    </Link>  
                   </li> */}
                {/* <li   onClick={goToTop}>
                  بالا
                   </li>  */}
            </ul>
         </nav>
      </header>
   );
};

export default Header;