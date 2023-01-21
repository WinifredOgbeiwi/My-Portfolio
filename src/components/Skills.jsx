import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'

function Skills() {

    const skillsIcon = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-cyan-500'
        },
        {
            id: 4,
            src: Javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },

        {
            id: 5,
            src: ReactImg,
            title: 'React',
            style: 'shadow-sky-500'
        },
        // {
        //     id: 6,
        //     src: Nextjs,
        //     title: 'NextJs',
        //     style: 'shadow-white-300'
        // },
        {
            id: 7,
            src: Github,
            title: 'Github',
            style: 'shadow-gray-500'
        }
    ]




    return (
        <div name='skills' data-aos='fade-down' className='bg-slate-900 shadow-2xl  shadow-white w-full h-screen '>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='py-8' >
                    <h3 className='text-4xl font-bold bg-cyan-500 shadow-lg shadow-cyan-500/50 px-8 py-3 rounded-md inline'>Skills</h3>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        skillsIcon.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                            ))
                            }
                </div>
            </div>






        </div>
    )
}

export default Skills