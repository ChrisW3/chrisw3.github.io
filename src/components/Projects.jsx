import React from 'react';
import { projectInfo } from '../projectInfo'


const Projects = () => {

  // projects file
  const project = projectInfo;
  //setProject(data);

  return (
    <div name='projects' className='w-full md:h-screen text-white bg-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-white border-red-800'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent projects:</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">

          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-gray-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-4xl font bold text-white tracking-wider">
                  {item.name}
                </span>
                <p className='font-bold py-1'>{item.stack}</p>
                <p className='py-2 mx-2'>{item.desc}</p>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github Repo
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Projects;