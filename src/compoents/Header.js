import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../images/home 1.svg'
import person_icon from '../images/user 1.svg'
import search from '../images/search 1.svg'
import PayContext from '../context/PayProvider';

const Header = () => {
   const context = useContext(PayContext)

   return (
      <header className='position-relative'>
         <nav className='d-flex position-fixed justify-content-center'>
            <ul className='m-0 p-0 d-flex flex-md-column flex-sm-row flex-row list-unstyled'>
               <li>
                  <NavLink to={'/'}
                     className={(navData) => navData.isActive ? "active-link  text-decoration-none header-link position-relative" : " text-decoration-none header-link position-relative"}>
                     <img src={home} alt="home icon" />
                     <span className='position-absolute'>صفحه اصلی</span>
                  </NavLink>
               </li>
               {
                  !context.logged &&
                  <li>
                     <NavLink to={'/login'} className={(navData) => navData.isActive ? "active-link text-decoration-none header-link position-relative" : " text-decoration-none header-link position-relative"}>
                        <img src={person_icon} alt="user icon" />
                        <span className='position-absolute'>نام نویسی</span>
                     </NavLink>
                  </li>
               }
               {
                  context.pay &&
                  <li>
                     <NavLink to={'/search'} className={(navData) => navData.isActive ? "active-link text-decoration-none header-link position-relative" : " text-decoration-none header-link position-relative"}>
                        <img src={search} alt="search icon" />
                        <span className='position-absolute'>جستجوی شعر</span>
                     </NavLink>
                  </li>
               }
            </ul>
         </nav>
      </header>
   );
};

export default Header;