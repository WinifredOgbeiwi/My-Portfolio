import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
function Hero() {
  return (
    <>
      <section name='home' className="h-screen">
        <div className='flex flex-col items-center justify-center h-full px-5'>
          <div>
          <h4
              data-aos='fade-right'
              className='flex justify-start text-sm sm:text-xl'>Hi, I am </h4>
          <h1 
              data-aos='fade-left'
          className='text-4xl sm:text-7xl '>Winifred ogbeiwi</h1>
            <p data-aos='fade-right' className='mt-5 text-xs sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, labore. Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Iure, sequi?</p>

            <div data-aos='fade-left'>
              <a href="./Winifred_Ogbeiwi_CV.pdf" download={true}>
                <button className=' w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white cursor-pointer group shadow-2xl gap-4 text-xs'>Download CV

                  <span className='group-hover:rotate-90 duration-300'><MdDoubleArrow />
                  </span>
                </button>
              </a>
            </div>
          </div>

      


        </div>
      </section>
    </>
  )
}

export default Hero
