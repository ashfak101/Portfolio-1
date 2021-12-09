import React,{useEffect, useState} from 'react';
import Dropdown from '../Shared/Dropdown/Dropdown';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';


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
           <Banner/>
           <AboutMe/>
           <Projects/>
           <Blogs/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default Home;