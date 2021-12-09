import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skill = () => {
     AOS.init();  
    return (
        <div className="bg-primary">
            <div className="text-center text-main my-12">
                    <h1 className="text-3xl font-bold">My Skills</h1>
                    <i className="about inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-main  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg></i>
            </div>
            <section className="grid md:grid-cols-3">
                <div data-aos="fade-up-right" className="">
                    <h2 className="text-secondary text-xl inline-block uppercase border-b-2 pb-2 mb-5">Comfortable</h2>
                    <div className='text-secondary'>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">JavaScript</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">React Js </button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">React React Router</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Rest Api</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">React Bootstrap</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Bootstrap</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Tailwind Css</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">HTML</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">CSS</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">MongoDB</button>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="">
                    <h2 className="text-secondary text-xl inline-block uppercase border-b-2 pb-2 mb-5">Familiar</h2>
                    <div className='text-secondary'>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Node.js</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Express.js </button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Material UI</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">JSON</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">SASS</button>
                    </div>
                </div>
                <div data-aos="fade-down-right" className="">
                    <h2 className="text-secondary text-xl inline-block uppercase border-b-2 pb-2 mb-5" >Tools</h2>
                    <div className='text-secondary'>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Vs code</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Chrome Dev Tool</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Firebase</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Netlify</button>
                        <button className="border-2 font-sans rounded text-mainText font-bold my-1 px-3  py-1 mr-2
                             hover:bg-secondary hover:text-primary ">Heroku</button>
                    </div>
                </div>
               
            </section>
        </div>
    );
};

export default Skill;