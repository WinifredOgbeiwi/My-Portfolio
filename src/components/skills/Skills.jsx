import React from "react";
import Headings from "../subComponents/Headings";
import skillsIcon from "./skillsData";
import '../subComponents/BoxStyle.css'
function Skills() {
  return (
    <>
      <section 
      name="skills"
      data-aos="fade-down" 
        className="py-20">
        <Headings title="Skills" />

        <div 
        className="flex flex-wrap justify-center gap-10">
          {skillsIcon.map(({ id, src, title }) => (
            <div
              data-aos="fade-right"
              key={id}
              className='shadow-xl hover:scale-105 duration-500 p-1 sm:p-5 rounded-lg w-32 sm:w-60'
            >
              <div className="firstDiv rounded-lg p-1 sm:p-5">
                <div className="secondDiv rounded p-3 sm:p-5 flex items-center flex-col ">
                  <img 
                  data-aos="fade-up" 
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
