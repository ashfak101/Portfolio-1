import React from 'react';

import { HashLink } from 'react-router-hash-link';
const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={ isOpen ? "grid grid-rows-4 text-center items-center bg-primary text-secondary" : "hidden"} >
            <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out " to="/home#home">HOME</HashLink>
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/home#about">ABOUT</HashLink>
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/home#project">PROJECT</HashLink>
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/home#blog">BLOG</HashLink>
                        <HashLink className="mr-2 px-4 py-2 menu-item hover:text-main transition duration-500 ease-in-out" to="/home#contact">CONTACT</HashLink>
        </div>
    );
};

export default Dropdown;