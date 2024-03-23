import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black flex justify-center items-center'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
        <p className='text-red-700'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Chris Woolley
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] text-center'>
          I'm a Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 text-center'>
          I’m a React Developer with a passion for building modern and responsive
          web applications.
        </p>
        <div className='flex items-center space-x-2'>
          <Link to='projects' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-black'>
              View my Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
          <a href="https://docs.google.com/document/d/1XE59qwFcIjMx2mDh5EJ80ycO89K9OE-0_IihI8t4i-4/edit?usp=sharing" target="_blank">
            <button className='bg-red-800 text-white group px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500'>
              Download my Resume
            </button>
          </a>
        </div>
        <div className='flex items-center space-x-2 pt-4'>
          <a href="https://www.linkedin.com/in/christopher-woolley/" target="_blank">
            <img className='w-12 h-12' src="linkedin-logo.png" alt="linkedin" />
          </a>
          <a href="https://github.com/ChrisW3" target="_blank">
            <img className='w-16 h-16' src="github-logo.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;