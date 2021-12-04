import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../../Images/logo/icon-A.png'
import './Navbar.css'
const Navbar = ({toggle}) => {
    return (
        <>
            <nav className=" flex justify-between items-center sm:p-2 bg-primary text-secondary  md:px-28 pt-2 font-serif"  >
                <div className='w-12'>
                    <img src={logo} alt="" />
                </div>
                <div className="md:hidden" onClick={toggle}>
                    <i><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                                                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                   </svg></i>
                </div>
                <div className="   md:block hidden  cursor-default" >
                        <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out " to="/invoices">HOME</Link>
                        <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/expenses">ABOUT ME</Link>
                        <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/expenses">CONTACT</Link>
                        <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/expenses">PROJECT</Link>
                </div>
            </nav>
            
        </>
    );
};

export default Navbar;