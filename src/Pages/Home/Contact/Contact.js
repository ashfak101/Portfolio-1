import React from 'react';
import { useForm } from "react-hook-form";
import { BiUserCircle } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // watch input value by passing the name of it
    return (
        <div className="bg-primary text-secondary">
                 <div className="text-center text-main py-8">
                    <p className="font-sans">Feel free to contact me anytimes</p>
                    <h1 className="text-4xl font-bold ">Get in Touch</h1>
                    <i className="about inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-main  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg></i>
                 </div>
                <section className=" md:mx-36 mx-2 grid md:grid-cols-5 ">
                    <div className="col-span-3">
                        <h2 className="text-2xl font-medium">Message Me</h2>
                   
                        <form onSubmit={handleSubmit(onSubmit) } >
                        {/* register your input into the hook by invoking the "register" function */}
                        <input {...register("name")} placeholder='Name' className="  bg-primary  w-full md:w-80 my-4 md:mr-7 p-4 border-b border-main "/>
                        
                        {/* include validation with required or other standard HTML validation rules */}
                        <input type="email" {...register("email", { required: true })} placeholder='Email' className=" w-full md:w-96 my-4 bg-primary p-4 border-b border-main"/>
                        {errors.email && <span>This field is required</span>}
                        <input {...register("subject", { required: true })} placeholder='Subject' className="w-full mb-4 bg-primary p-4 border-b border-main"/>
                        {/* errors will return when field validation fails  */}
                        {errors.subject && <span>This field is required</span>}
                        <textarea cols="40" rows="5"{...register("message")} placeholder='Message' className=" p-4 bg-primary  w-full border-b border-main  "/>
                        
                        <input value="Send message" type="submit" className="border-2 rounded font-medium       text-primary          my-4 bg-main   px-6  py-1 mr-8
                        hover:bg-secondary hover:text-primary " />
                        </form>
                     </div>
                     <div className="col-span-2 pl-8">
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