import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={ isOpen ? "grid grid-rows-4 text-center items-center bg-primary text-secondary" : "hidden"} >
            <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out " to="/invoices">HOME</Link>
             <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/expenses">ABOUT ME</Link>
            <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/expenses">CONTACT</Link>
            <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/expenses">PROJECT</Link>
            <Link className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/expenses">BLOG</Link>
        </div>
    );
};

export default Dropdown;