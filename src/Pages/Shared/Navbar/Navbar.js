import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../../Images/logo/icon-A.png'
const Navbar = ({toggle}) => {
    return (
        <>
            <nav className="flex justify-between items-center mx-8 md:mx-28 pt-2"  >
                <div className='w-16'>
                    <img src={logo} alt="" />
                </div>
                <div className="md:hidden cursor-pointer" onClick={toggle}>
                    <i><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                                                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                   </svg></i>
                </div>
                <div className=" md:block hidden " >
                        <Link className="p-6" to="/invoices">Invoices</Link>
                        <Link className="p-6" to="/expenses">Expenses</Link>
                        <Link className="p-6" to="/expenses">Expenses</Link>
                        <Link className="p-6" to="/expenses">Expenses</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;