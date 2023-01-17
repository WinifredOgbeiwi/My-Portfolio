import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import Typewriter from 'typewriter-effect'
function Hero() {
  return (
    <main name="home" className='h-screen w-full bg-heroBackground bg-cover bg-no-repeat bg-center z-50' >
      <section className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-1 mr-12'>
        <div className='flex flex-col justify-center h-full'>
          <h1 className='text-3xl sm:text-6xl font-bold  text-white font-headingFont '>Hi,<br />My name is <span className='shadow-2xl bg-neutral-200 rounded-md px-4 text-black'>Winifred</span> </h1>

          <h2 className='text-white  text-2xl sm:text-4xl py-4 max-w-md'>

            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "I am a Web Developer",
                  "I am a Tech Enthusiast",
                  "I am a Women Techsters Fellow"
                ]
              }} />
          </h2>
          <div>
            <a href="./Winifred Ogbeiwi_Frontend(Software Development).pdf" download={true}>
              <button className='text-blue w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white cursor-pointer group shadow-2xl'>Download CV

                <span className='group-hover:rotate-90 duration-300'><MdDoubleArrow />
                </span>
              </button>
            </a>
          </div>
        </div>
        {/* 
        <div>
          <img src={heroImage} alt="hero pic" className='mx-auto w-2/3 ml-[20%]  md:w-full mt-[-15%]' />
        </div> */}

      </section>

    </main>
  )
}

export default Hero