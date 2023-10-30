import React from "react";
import Headings from "../subComponents/Headings";
import projectDatas from "./projectDatas";
import { MdPreview } from "react-icons/md";

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
            key={index}
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

        </div>
      </section>
    </>
  );
}

export default Projects;
