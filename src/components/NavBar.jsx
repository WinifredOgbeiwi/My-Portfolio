import React, { useState,useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll";
import Logo from '../assets/Logo.png'
import Aos from 'aos';
import 'aos/dist/aos.css'


function NavBar() {
    // array objects for mapping navbar
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "skills"
        },
        {
            id: 4,
            link: "projects",
        },
        {
            id: 5,
            link: "contact"
        }
    ]
    // usestate for responsive navbar
    const [nav, setNav] = useState(false);

    useEffect(()=>{
        Aos.init({duration:2000});
    }, []);
    return (
        <div data-aos='fade-down' className='flex justify-between items-center w-full bg-cyan-300 bg-transparent-0 text-black fixed p-4 z-50'>
            <div>
                
                <a href="./Hero.jsx">
                <img src={Logo} alt='' className='w-28 cursor-pointer'/></a>
               
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) =>
                    <li
                        key={id}
                        className='px-4 cursor-pointer font-medium hover:-rotate-12 duration-300 capitalize focus:border-b-[3px]'>
                        <Link
                            activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >{link}</Link>
                      </li>
                )}

            </ul>

            {/* icons */}
            <div
                className='cursor-pointer pr-4 z-10 text-black md:hidden'
                onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* links for responsive navbar */}
            {nav && (

                <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-60 h-screen bg-sky-500/50 text-white'>
                    {links.map(({ id, link }) =>
                        <li
                            key={id}
                            className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick = {() => setNav(!nav)}
                            >{link}</Link>
                            </li>
                    )}
                </ul>
            )}






        </div>
    )
}

export default NavBar