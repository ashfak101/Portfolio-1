import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={ isOpen ? "grid grid-rows-4 text-center items-center bg-gray-500" : "hidden"} >
            <Link className="p-6" to="/invoices">Invoices</Link>
            <Link className="p-6" to="/expenses">Expenses</Link>
            <Link className="p-6" to="/expenses">Expenses</Link>
            <Link className="p-6" to="/expenses">Expenses</Link>
        </div>
    );
};

export default Dropdown;