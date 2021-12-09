import React, { useRef,useState } from 'react';

import emailjs from 'emailjs-com';
import { BiUserCircle } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
const Contact = () => {
    const form = useRef();
    const [success,setSuccess]= useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ms5wrwg','template_0eliij3', form.current, 'user_RHogfbetCew1SAwDRmxrb')
          .then((result) => {
             if(result.text){
                 setSuccess(true)
                 e.target.reset()
             }
          }, (error) => {
              console.log(error.text);
          });
          
      };
    
    return (
        <div id="contact" className="bg-primary text-secondary">
                 <div className="text-center text-main py-8">
                    <p className="font-sans">Feel free to contact me anytimes</p>
                    <h1 className="text-4xl font-bold ">Get in Touch</h1>
                    <i className="about inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-main  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg></i>
                 </div>
                <section className=" md:mx-36  grid md:grid-cols-5 ">
                    <div data-aos="zoom-in-down" className="col-span-3">
                        <h2 className="text-2xl font-medium">Message Me</h2>
                   
                        <form ref={form} onSubmit={sendEmail} >
                       
                        <input type='text' name='name' placeholder='Name' className="  bg-primary  w-full md:w-80 my-4 md:mr-7 p-4 border-b border-main "/>
                        <input type="email" name='email' placeholder='Email' className=" w-full md:w-96 my-4 bg-primary p-4 border-b border-main"/>

                        <input type='subject' name='subject' placeholder='Subject' className="w-full mb-4 bg-primary p-4 border-b border-main"/>
                        {/* errors will return when field validation fails  */}
                       
                        <textarea cols="40" rows="5" name="message" placeholder='Message' className=" p-4 bg-primary  w-full border-b border-main  "/>
                        {
                            success && <h1 className="text-main">Send Successfully</h1>
                        }
                        <input value="Send message" type="submit" className="border-2 rounded font-medium       text-primary          my-4 bg-main   px-6  py-1
                        hover:bg-secondary hover:text-primary " />
                        </form>
                     </div>
                     <div data-aos="zoom-in-up" className="col-span-2 pl-8 ">
                         <h2 className="text-2xl font-medium">
                            Contact Info
                         </h2>
                         <div className="mt-3">
                             <p className="text-mainText">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                             <div className="flex mt-4">
                                 <div className="border-r text-mainText ">
                                     <BiUserCircle className="text-4xl m-5 text-main"/>
                                     <BiCurrentLocation className="text-4xl m-5 text-main"/>
                                     <BiPhone className="text-4xl m-5 text-main"/>
                                     < BiMailSend className="text-4xl m-5 text-main"/>
                                 
                                 </div>
                                 <div className="-mt-3">
                                     <div className="m-4 ">
                                         <h2>Name</h2>
                                         <p className="text-mainText text-sm ">Md Ashfakul karim Rahi</p>
                                     </div>
                                     <div className="m-4">
                                         <h2>Location</h2>
                                         <p className="text-mainText text-sm ">Sylhet,Bangladesh</p>
                                     </div>
                                     <div className="m-4">
                                         <h2>Call Me</h2>
                                         <p className="text-mainText text-sm ">+8801788778596</p>
                                     </div>
                                     <div className="m-4">
                                         <h2>Email Me</h2>
                                         <p className="text-mainText ">ashfakulkarim2@gmail.com</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                </section>
        </div>
    );
};

export default Contact;