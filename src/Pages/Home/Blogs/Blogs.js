import React from 'react';

const Blogs = () => {
    return (
        <div id="blog" className="bg-primary">
             <div data-aos="fade-down" className="text-center text-main py-8">
                    <p className="font-sans">Check out my latest blog posts</p>
                    <h1 className="text-3xl font-bold ">My Blog</h1>
                    <i className="about inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-main  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg></i>
            </div>
            <h2 className="text-center text-secondary font-medium text-3xl py-36">Blogs are comming soon</h2>
        </div>
    );
};

export default Blogs;