import React from "react";
import Headings from "../subComponents/Headings";
import MyPic from "../../Images/my-pic.png";
function About() {
  return (
    <section
      name="about"
      data-aos="fade-down"
      className=" -mt-20"
    >
      <Headings title="About" />
       <div className="flex flex-col lg:flex-row gap-3 sm:gap-10">
        <div className="shadow-2xl basis-1/2 h-[36rem] p-2 sm:p-5 ">
          <div className="border-4 p-1 sm:p-5 border-black h-full ">
            <p className="border-2 border-black rounded-md h-full p-2 sm:p-5 text-sm
           ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quibusdam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            illo pariatur unde hic! Error voluptas harum aspernatur modi impedit
            amet quisquam ut debitis. Reiciendis suscipit repellat molestias
            vero iusto aut dolore molestiae! Suscipit beatae officia nobis
            excepturi modi reiciendis necessitatibus totam vitae magnam
            assumenda, debitis molestias officiis iste odit. Accusantium.
          </p>
          </div>
        </div>
        <div className=" shadow-2xl basis-1/2 p-2 sm:p-5  lg:mt-32 h-fit ">
          <div className="border-4 p-1 sm:p-5 border-black  ">
            <div className="border-2 border-black rounded-md overflow-hidden w-full ">
              <img src={MyPic} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
