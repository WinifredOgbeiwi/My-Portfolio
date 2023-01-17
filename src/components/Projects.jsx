import React from 'react'
import SearchFilter from '../assets/portfolio/SearchFilter.png'
import SchoolWebsite from '../assets/portfolio/1.png'
import LandingPage from '../assets/portfolio/2.png'
import BankingWeb from '../assets/portfolio/3.png'


function Projects() {
 
    const projects = [
        {
            id: 1,
            src: LandingPage,
        },
        {
            id: 2,
            src: SchoolWebsite,
        },
        {
            id: 4,
            src: BankingWeb,
        },
        {
            id: 5,
            src:  SearchFilter,
        },
    ]



    return (
        <div name='projects' className=' bg-slate-900 shadow-2xl shadow-white w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                
                <div className='pb-8'>
                    <h3 className='text-4xl font-bold inline bg-cyan-500 shadow-lg shadow-cyan-500/50 px-8 py-3 rounded-md'>Projects</h3>
                </div>
                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-4 pb-5'>
                    {projects.map(({ id, src }) => (

                        <div key={id} className=' rounded-lg shadow-md shadow-gray-600'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />

                            <div className='flex items-center justify-center'>
                                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:110 text-white shadow-sm shadow-slate-500'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:110 text-white  shadow-sm shadow-slate-500'>Code</button> */}
                            </div>
                          
                        </div>

                    //       onClick = {() => demoLink }>
                    // {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

                    ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Projects