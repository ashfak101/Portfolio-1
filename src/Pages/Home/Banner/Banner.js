import React from 'react';
import img from '../../../Images/1.jpg'
import Typical from 'react-typical'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Banner = () => {
   
    return (
        <div className="bg-primary pt-20" >
            <section className="  grid md:grid-cols-2 bg-primary sm:pt-5 md:p-6 md:mx-12 ">
                <div className='px-4 md:py-12 md:pl-12 '>
                    <h4 className="text-secondary text-3xl tracking-wide md:text-7xl font-bold md:mt-10 mt-10  ">Ashfakul Karim</h4> 
                    <div className="text-secondary font-sans text-2xl md:text-3xl mt-8 ">
                        
                                  I'm a <Typical
                                        steps={['Front-End Developer',2000,'Designer',2000,'Freelancer',500]}
                                        loop={Infinity}
                                        className="inline text-main"
                                        
                                    />
                        </div>
                       
                        <div className="my-6">
                            <a className="border-2 hover:delay-150 font-sans  text-secondary md:text-xl font-bold  px-4  py-2 mr-4
                             hover:bg-secondary hover:text-primary 
                            " href="#about">About me</a>
                            <a className="bg-secondary font-sans text-primary md:text-xl  font-bold px-4 py-2
                              hover:bg-main 
                            " href="https://drive.google.com/file/d/1QEUN_YJpm7r3t0DFs6DPIuEmMbqRg0j_/view" target='blank'>Resume</a>
                        </div>
                        <div className=' flex '>
                           
                            <a className="text-secondary text-3xl mr-6
                            hover:text-main " href="https://github.com/ashfak101" target="blank"><AiFillGithub/></a>
                            <a className="text-secondary text-3xl 
                            hover:text-main" href="https://www.linkedin.com/in/md-ashfakul-karim-rahi-3a0b62211/" target="blank"><AiFillLinkedin/></a>
                        </div>
                   
                </div>
                <div className="">
                    <img className="img-i " src={img} alt="" />
                </div>
    
            </section>
        </div>
    );
};

export default Banner;