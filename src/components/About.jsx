import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-800'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Chris Woolley, I'm a Software Engineer with a passion for making Web Applications</p>
            </div>
            <div>
              <p className='py-4'>After graduating with a B.S in Computer Science from Rutgers University in 2020, 
              I returned full-time to the engineering internship I held that previous summer at Edmunds GovTech.
              </p>  

              <p className='py-4'>Although a brief detour into property management in late 2021 introduced me to new challenges, 
                I soon realized my passion was still in the problem solving and creativity I had experienced through software engineering, especially in web development.
              </p>

              <p className='py-4'>In September 2023, I reignited this passion by diving into online courses and working on projects that excite me, utilizing technologies such as
                React, Python and Django. As I seek a full-time role that allows me to continue growing and contributing my skills in web development, 
                I'm eager to bring my unique blend of experience, innovation, and dedication to a dynamic team.
              </p>

            </div>
          </div>
      </div>
    </div>
  );
};

export default About;