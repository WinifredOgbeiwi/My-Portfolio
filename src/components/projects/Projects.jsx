import React from "react";
import Headings from "../subComponents/Headings";
import projectDatas from "./projectDatas";
import { MdPreview } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import Ebook from '../../Images/projects/ebook.png'
function Projects() {
  const langStyle = {
    border: "1px solid black",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "3px 3px rgb(0, 0, 0)",
    padding: "0 5px",
    fontSize: ".6rem",
  };

  return (
    <>
      <section name="projects" className="mt-20">
        <Headings title="Projects" />
        <div>
          {projectDatas.map((data, index) => (
            <div
              className={`flex flex-col md:flex-row items-center  w-full gap-10 my-10 ${index % 2 === 0 ? '' : ' md:flex-row-reverse'
                }`}
            >
              <div className="secondDiv overflow-hidden md:w-1/2" >
                <img src={data.cover} alt="" />
              </div>
              <div className="md:w-1/2 md:text-justify md:mt-20  mb-5">
                <h2 className="text-3xl font-bold mb-2 ">{data.title}</h2>
                <p>{data.description} <span className=" font-bold">{data.features}</span></p>
                <div className="my-3 flex gap-3">
                  {data.technologies.map((tech, index)=>(
                    <p key={index} style={langStyle}>{tech}</p>
                  ))}
                </div>
                <div className="flex items-center font-thin cursor-pointer text-xs">
              <p>Live -</p>  {data.live && <a href={data.live} target="_blank" rel="noreferrer">
                    <MdPreview className="hover:scale-110 text-xl sm:text-2xl" />
                  </a>}

                </div>
              </div>
            </div>
          ))}


          {/* <div 
         
          className="flex justify-center  gap-10">
            {projectDatas.map((data) => (

              <div key={data.id} className="secondDiv p-2 sm:p-5 rounded-lg w-fit">
                <div className="sm:h-52 h-24 overflow-hidden w-fit">
                  <img
                    src={data.cover}
                    alt="Project Sample"
                    className="rounded-lg w-80"
                  />
                </div>
                <div className="my-3 flex gap-3">
                  <p style={langStyle}>{data.lang1}</p>
                  <p style={langStyle}>{data.lang2}</p>
                  {data.lang3 && <p style={langStyle}>{data.lang3}</p>}
                      {data.lang4 && <p style={langStyle}>{data.lang4}</p>}
                  {data.lang5 && <p style={langStyle}>{data.lang5}</p>}
                  {data.lang6 && <p style={langStyle}>{data.lang6}</p>}
                </div>
                
                <h4 className="font-bold text-sm">{data.heading}</h4>
                <p className="text-xs w-72">{data.description}</p>
                <div className="flex justify-center gap-3 mt-3 text-xl sm:text-3xl font-thin cursor-pointer ">
                  {data.live && <a href={data.live} target="_blank" rel="noreferrer">
                    <MdPreview className="hover:scale-110" />
                  </a>}
                  {data.github && <a href={data.github} target="_blank" rel="noreferrer">
                    <FaGithubSquare className="hover:scale-110" />
                  </a>}
                 
                </div>
              </div>


            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
