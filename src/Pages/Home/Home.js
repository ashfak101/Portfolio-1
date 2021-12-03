import React,{useEffect, useState} from 'react';
import Dropdown from '../Shared/Dropdown/Dropdown';
import Navbar from '../Shared/Navbar/Navbar';


const Home = () => {
    const [isOpen,setIsOpen] =useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    useEffect(()=>{
        const hideMenu=()=>{
            if(window.innerWidth && isOpen){
                setIsOpen(false)
            }
        }
        window.addEventListener('resize',hideMenu)
        return ()=>{
            window.removeEventListener('resize',hideMenu)
        }
    },[isOpen])
    return (
        <div>
           <Navbar
            toggle={toggle}
           />
           <Dropdown isOpen={isOpen}
           toggle={toggle}
           />
        </div>
    );
};

export default Home;