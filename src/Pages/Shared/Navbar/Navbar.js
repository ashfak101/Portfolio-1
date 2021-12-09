import React from 'react';

import logo  from '../../../Images/logo/icon-A.png'
import './Navbar.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const Navbar = ({toggle}) => {
    return (
        <div >
            <nav className="flex justify-between items-center  sm:p-2 bg-primary text-secondary p-3 md:px-28 pt-2 font-serif  "   >
                <div className='w-12'>
                    
                   <Link to='/home'> <img src={logo} alt="" /></Link>
                </div>
                <div className="md:hidden" onClick={toggle}>
                    <i><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                                                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                   </svg></i>
                </div>
                <div className="   md:block hidden  cursor-default " >
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out " to="/home#home">HOME</HashLink>
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/home#about">ABOUT</HashLink>
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/home#project">PROJECT</HashLink>
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/home#blog">BLOG</HashLink>
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/home#contact">CONTACT</HashLink>
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;