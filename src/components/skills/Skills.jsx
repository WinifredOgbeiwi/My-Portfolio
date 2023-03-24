import React from "react";
import Headings from "../subComponents/Headings";
import skillsIcon from "./skillsData";
function Skills() {
  return (
    <>
      <section 
      name="skills"
      data-aos="fade-down" 
      className="">
        <Headings title="Skills" />

        <div 
        className="flex flex-wrap justify-center gap-10">
          {skillsIcon.map(({ id, src, title }) => (
            <div
              data-aos="fade-right"
              key={id}
              className={`shadow-xl hover:scale-105 duration-500 p-1 sm:p-5 rounded-lg`}
            >
              <div className="border-4 border-black rounded-lg p-1 sm:p-5">
                <div className="border-2 border-black rounded-lg p-3 sm:p-5 ">
                  <img 
                  data-aos="fade-left" 
                  src={src} alt="" className="w-20 md:w-full" />
                  <p className="mt-4 text-center font-semibold text-xs sm:text-xl">
                    {title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
