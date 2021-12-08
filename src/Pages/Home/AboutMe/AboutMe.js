import React from 'react';
import aboutImg from '../../../Images/about/2.jpg'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Skill from '../Skill/Skill';
const AboutMe = () => {
    return (
        <div className="bg-primary py-14">
            <section className="pt-8 mx-2 md:mx-36">
               <div className="text-center text-main my-8">
               <p className="font-sans">Get to know me</p>
                    <h1 className="text-3xl font-bold">About Me</h1>
                    <i className="about inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-main  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg></i>
               </div>
               <div className="flex flex-col md:flex-row gap-4">
                   <div className="mr-6">
                       <img  src={aboutImg} alt="" />
                   </div>
                   <div className=" font-serif">
                       <h4 className="text-xl text-main">Hello I'm</h4>
                       <h4 className="text-2xl text-secondary leading-6 my-4">Ashfakul Karim ,a Web Developer Expert in React Js </h4>
                       <p className="leading-8 text-mainText"> I am passionate about connecting talent to opportunities! I have graduated from Leading University in Computer Science & Engineering.I'm a Web developer with a deep interest in JavaScript.I'm looking forward to using what I have learned and apply it in the field.</p>
                       <hr className="bg-mainText my-6" />
                       <div className="flex flex-initial flex-row gap-12">
                           <div >
                               <h4 className="text-mainText mb-6"> <span className="text-secondary mr-4">Name:  </span> Md Ashfakul Karim Rahi</h4>
                               <h4 className="text-mainText"> <span className="text-secondary mr-6">Age:  </span> 23</h4>
                               
                           </div>
                           <div>
                               <h4 className="text-mainText mb-6"> <span className="text-secondary mr-4">Email:  </span> ashfakulkarim2@gmail.com</h4>
                               <h4 className="text-mainText"> <span className="text-secondary mr-4">From:  </span> Sylhet, Bangladesh</h4> 
                           </div>
                       </div>
                       <div className=" flex mt-16">
                             <a className="border-2 hover:delay-150 font-sans rounded-lg text-secondary md:text-xl font-bold  px-4  py-2 mr-8
                             hover:bg-secondary hover:text-primary 
                            " href="files/../../../Resume of Ashfakul.pdf" download>Download Resume</a>

                            <div className="flex ml-12"><a className="text-secondary text-3xl mr-6
                            hover:text-main " href="#home"><AiFillGithub/></a>
                            <a className="text-secondary text-3xl mr-6
                            hover:text-main" href="#home"><AiFillLinkedin/></a>
                            <a className="text-secondary text-3xl 
                            hover:text-main" href="#home"><AiFillInstagram/></a></div>
                       </div>
                   </div>
               </div>
               <Skill/>
            </section>
        </div>
    );
};

export default AboutMe;