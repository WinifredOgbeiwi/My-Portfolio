import React from "react";
import Headings from "../subComponents/Headings";
import projectDatas from "./projectDatas";
import { MdPreview } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

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
      <section name="projects" data-aos="fade-down" className="mt-20">
        <Headings title="Projects" />
        <div>
          <div className="flex flex-wrap justify-center  gap-10">
            {projectDatas.map((data) => (

              <div key={data.id} className="secondDiv p-2 sm:p-5 rounded-lg w-62 ">
                <div className="sm:h-52 h-24 overflow-hidden w-72">
                  <img
                    data-aos="fade-right"
                    src={data.cover}
                    alt="Project Sample"
                    className="rounded-lg w-full"
                  />
                </div>
                <div data-aos="fade-left" className="my-3 flex gap-3">
                  <p style={langStyle}>{data.lang1}</p>
                  <p style={langStyle}>{data.lang2}</p>
                  {data.lang3 && <p style={langStyle}>{data.lang3}</p>}
                </div>
                <h4 className="font-bold text-sm">{data.heading}</h4>
                <p className="text-xs w-72">{data.description}</p>
                <div className="flex justify-center gap-3 mt-3 text-xl sm:text-3xl font-thin cursor-pointer ">
                  <a href={data.live} target="_blank" rel="noreferrer">
                    <MdPreview className="hover:scale-110" />
                  </a>
                  <a href={data.github} target="_blank" rel="noreferrer">
                    <FaGithubSquare className="hover:scale-110" />
                  </a>
                </div>
              </div>


            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
