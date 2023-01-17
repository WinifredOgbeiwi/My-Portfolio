import React from 'react'
import GirlImg from '../assets/heroImage.png'

function About() {

    return (
        <div name='about' className='w-full h-screen bg-slate-900 shadow-2xl shadow-white text-white '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h3 className='text-4xl font-bold inline  bg-cyan-500 shadow-lg shadow-cyan-500/50 px-4 py-3 rounded-md'>About</h3>  </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-12 sm:px-0'>
                    <div className='text-justify text-xl md:mt-9'>
                        <p className=' mt-10 mb-5'>A Legal Practitioner currently transitioning into tech.<br></br> I enjoy developing robust, scalable frontend solutions.</p>
                        <p> I am open to  internships as it would be a great opportunity to expand my knowledge in the field, chart a new course in my career and create a meduim for me to work on real life projects. </p> 
                    </div>
                    <div>
                        <img src= {GirlImg} alt="" className='hidden md:grid ' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About