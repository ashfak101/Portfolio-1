import React from 'react';
import project1 from '../../../Images/Project/Project1.png'
import project2 from '../../../Images/Project/Project2.png'
import project3 from '../../../Images/Project/Project3.png'
import './Project.css'
const Projects = () => {
    return (
        <div className="bg-primary">
            <section className=" md:mx-36 mx-2">
                <div className="text-center text-main py-8">
                    <p className="font-sans">Showcasing some of my best work</p>
                    <h1 className="text-3xl font-bold ">About Me</h1>
                    <i className="about inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-main  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg></i>
               </div>
               <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-secondary font-sans ">
                    <div className=" projects-box ">
                            <img className="h-80 animate-pulse w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"  src={project1} alt="" />
                            <div className="p-2">
                            <h2 className="text-xl font-medium uppercase text-main my-2">Glass Store</h2>
                            <p className="text-mainText">Built a MERN stack web application with a dynamic product section and feedback section.</p>
                            <h2  className="my-2 font-medium uppercase text-main">Technology used: </h2>
                            <p className="text-mainText">React.js, REST API, React Router, Firebase, Node.js, Express.js, MongoDB, Meterial Ui, Heroku</p>
                            </div>
                            <div className="my-3 text-center">
                            <a className="mr-6 border-2 p-1 rounded-lg text-secondary   
                             hover:bg-secondary hover:text-primary 
                            " href="#45" >Website</a>
                            <a className="border-2 p-1 rounded-lg text-secondary   
                             hover:bg-secondary hover:text-primary 
                            " href="#45" download>GitHub</a>
                            </div>
                    </div>
                    <div className="projects-box">
                             <img className="h-80 w-full animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={project2} alt="" />
                            <div className="p-2">
                            <h2 className="text-xl font-medium uppercase text-main my-2">Windy Holiday Planners</h2>
                             <p className="text-mainText">A MERN stack web application where users can log in with Google and can booked a service. they can cencel service</p>
                             <h2  className="my-2 font-medium uppercase text-main">Technology used: </h2>
                             <p className="text-mainText">React.js, REST API, React Router, Firebase, Node.js, Express.js, MongoDB,React Bootstrap, Heroku</p>
                            </div>
                             <div className="my-3 text-center">
                            <a className="mr-6 border-2 p-1 rounded-lg text-secondary   
                             hover:bg-secondary hover:text-primary 
                            " href="#45" >Website</a>
                            <a className="border-2 p-1 rounded-lg text-secondary   
                             hover:bg-secondary hover:text-primary 
                            " href="#45" download>GitHub</a>
                            </div>
                    </div>
                    <div className="projects-box">
                            <img className="h-80 animate-pulse w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"  src={project3} alt="" />
                           <div className="p-2">
                           <h2 className="text-xl font-medium uppercase text-main my-2">DenttCare Solution</h2>
                            <p className="text-mainText">A single page front-end website built by using Bootstrap and firebase google  Login system</p>
                            <h2 className="my-2 font-medium uppercase text-main">Technology used: </h2>
                            <p className="text-mainText">React.js, REST API, React Router, Firebase, Firebase Authentication, React-Bootstrap</p>
                           </div>
                            <div className="my-3 text-center">
                            <a className="mr-6 border-2 p-1 rounded-lg text-secondary   
                             hover:bg-secondary hover:text-primary 
                            " href="#45" >Website</a>
                            <a className="border-2 p-1 rounded-lg text-secondary   
                             hover:bg-secondary hover:text-primary 
                            " href="#45" download>GitHub</a>
                            </div>
                    </div>
               </div>
            </section>
        </div>
    );
};

export default Projects;