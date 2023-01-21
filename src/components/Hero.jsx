import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import Typewriter from 'typewriter-effect'

function Hero() {
  return (
    <main name="home" data-aos='flip-left'  className='h-screen w-full bg-heroBackground bg-cover bg-no-repeat bg-center z-50' >
      <section className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-1 mr-12'>
        <div className='flex flex-col justify-center h-full gap-2'>
          <h1 data-aos='fade-down' className='text-2xl sm:text-6xl pl:20 font-bold  text-white font-headingFont '>Hi,<br />My name is Winifred </h1>

          <p data-aos='fade-down' className='text-white  text-1xl sm:text-4xl'>

            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "I am a Web Developer",
                  "I am a Tech Enthusiast",
                  "I am a W.T Fellow"
                ]
              }} />
          </p>
          <div data-aos='fade-down'>
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