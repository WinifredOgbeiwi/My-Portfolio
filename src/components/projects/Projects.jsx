import React from 'react'
import Headings from '../subComponents/Headings'
import projectDatas from './projectDatas'
import { MdPreview } from 'react-icons/md'
import { FaGithubSquare } from 'react-icons/fa'

function Projects() {
  return (
    <>
      <section
        name="projects"
        data-aos="fade-down"
        className="">
        <Headings title="Projects" />
        <div>
          <div className='flex flex-wrap justify-center gap-10'>


            {projectDatas.map(({ id, img, github, live }) => (
                <div 
                key={id}className='shadow-xl p-5 w-[30rem]'>
                <div className='border-4 border-black p-2 sm:p-5 rounded-lg'>
                    <div className='border-2 border-black p-2 sm:p-5 rounded-lg '>
                      <div className='sm:h-72 h-32 overflow-hidden '>
                        <img src={img} alt="" className='rounded-lg' />
                      </div>
                  <div className='my-2 flex gap-3'>
                    <p className='border-2 border-black rounded sm:rounded-lg w-fit px-3 text-xs sm:text-base'>API</p>
                      <p className='border-2 border-black rounded sm:rounded-lg w-fit px-3 text-xs sm:text-base'>REACT</p>
                  </div>
                      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, excepturi.</p>
                      <div className='flex gap-3 sm:gap-10 mt-3 text-xl sm:text-2xl font-thin cursor-pointer '>
                        <a href={live} target='_blank'
                        rel="noreferrer"><MdPreview className='hover:scale-110' /></a>
                      <a href={github} target='_blank' rel="noreferrer"><FaGithubSquare className='hover:scale-110' /></a>
                      </div>
                    </div>
                  </div>
                </div>


            ))
            }






          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
