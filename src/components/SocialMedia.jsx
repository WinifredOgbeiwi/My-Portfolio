import React from 'react'
// import { icons } from 'react-icons'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'


function SocialMedia() {
  const SocialMediaLinks = [
    {
      id: 1,
      child: (
        <>
          Github
          <FaGithub size={20} />
        </>
      ),
      href: 'https://github.com/WinifredOgbeiwi',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Twitter
          <FaTwitter size={20} />
        </>
      ),
      href: 'https://twitter.com/winifredogbeiwi',
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={20} />
        </>
      ),
      href: 'https://www.linkedin.com/in/winifred-imade-ogbeiwi-792b3a200/',
    },
    {
      id: 4,
      child: (
        <>
          Email
          <MdMailOutline size={20} />
        </>
      ),
      href:'mailto:imadeogbeiwi@gmail.com',
    },
  ]
  return (
    <div className='hidden lg:flex flex-col top-[50%] left-0 fixed z-50' >
      <ul>
        {SocialMediaLinks.map(({id, child, href, style, download}) => (
          <li key={id}
            className={'flex justify-between items-center w-40 h-10 px-5 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-1000 bg-cyan-300 ' + 
            ' ' 
            + style} 
            
            >
            <a href={href} className='flex justify-between items-center w-full text-black'
              download={download}
              target = '_blank'
              rel="noreferrer">

              {child}
            </a>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default SocialMedia