import {
  HoverCard,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import React from "react";
import ProjectCard from '../components/ProjectCard';


// import '../styling/Tag.css';

const About: React.FC = () => {
  return (
      <div id="whole page" className="min-h-screen flex pt-0 p-8 text-stone-800 justify-center overflow-x-hidden">
        <div id="whole page" className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full flex flex-col justify-center items-center pt-0 p-8">

          <div id="first row of squares" className="grid grid-cols-2 gap-0">
            <div></div>
            <div className="col-start-2">
              <div className="grid grid-cols-3 gap-0">
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                  flex items-center justify-center overflow-hidden">
                    <img
                      src="/asterisk.svg"
                      alt="Asterisk"
                      className="w-max h-max object-contain"
                      id="asterisk asset"
                    />
                </div>
              </div>
            </div>
          </div>

                     {/* ---------------------------------------------------------------------- */}

          <div className="grid grid-cols-[5fr_1fr] w-full">
            <div className="flex items-center justify-left">
              <span className="py-0">
                <p className="font-[Instrument] text-5xl 2xl:7xl">Hi there, I'm</p>
                <p className=" font-[Nowcloud] text-9xl 2xl:text-[10rem] ">Sarah</p>
                <p className="font-[Instrument] text-3xl 2xl:5xl">UI/UX Designer | Graphic Designer | Computer Science</p>
                <div className="py-4 text-stone-700 inline-block p-4">
                  <div className="flex">
                    
                    {/* <div className="pr-2">
                      <div className="flex bg-[#FFEB81] p-1 px-4 rounded-xl pr-4">
                        <p className="pr-4 ">X</p><p>Figma</p>
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="flex bg-[#E8D0FF] p-1 px-4 rounded-xl pr-4">
                        <p className="pr-4 ">X</p><p>Canva</p>
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="flex bg-[#A3CED6] p-1 px-4 rounded-xl pr-4">
                        <p className="pr-4 ">X</p><p>Tailwind</p>
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="flex bg-[#6EAA87] p-1 px-4 rounded-xl pr-4">
                        <p className="pr-4 ">X</p><p>Typescript</p>
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="flex bg-[#A3CED6] p-1 px-4 rounded-xl pr-4">
                        <p className="pr-4 ">X</p><p>Procreate</p>
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="flex bg-[#FFEB81] p-1 px-4 rounded-xl pr-4">
                        <p className="pr-4 ">X</p><p>tailwind</p>
                      </div>
                    </div> */}

                  </div>
                </div>
              </span>
            </div>
            
            <div className="flex items-center justify-end w-auto">
              <div className="flex flex-col gap-y-0 w-full">
                <div className="w-full aspect-square bg-[#6EAA87] rounded-md"></div>
                <div className="w-full aspect-square bg-[#A3CED6] rounded-md"></div>
                <div className="w-full aspect-square bg-[#FFEB81] rounded-md"></div>
              </div>
            </div>
            </div>

           {/* ---------------------------------------------------------------------- */}

                {/* padding is not consistent with other grids */}
            <div className="grid grid-cols-6 gap-0">
                <div className="w-full rounded-lg bg-transparent aspect-square"></div>
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center 
                  flex items-center justify-center overflow-hidden">
                  <img
                    src="/asterisk.svg"
                    alt="Asterisk"
                    className="w-max h-max object-contain"
                  />
                  </div>
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
            </div>

               {/* ---------------------------------------------------------------------- */}

            <div className="grid grid-cols-6 gap-0">
              <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
              <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            </div>

             {/* ---------------------------------------------------------------------- */}
          <div className="grid grid-cols-[2fr_4fr] items-start w-full align-top">
            <div className="grid grid-cols-2 w-full">
              <div className="col-start-1 w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              <div className="col-start-2 w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              <div className="col-start-1 w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              <div className="col-start-2 w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                  flex items-center justify-center overflow-hidden"></div>
              <div className="col-start-1 w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              <div className="col-start-1 w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            </div>

            <div id="latest projects section" className=" 2xl:scale-{1.5}">
              <div className="pl-16 2xl:pl-12 w-full">
                <span className="">
                  <h1 className=" font-[Nowcloud] text-right text-5xl 2xl:text-7xl">Projects</h1>
                  <h1 className=" font-[Nowcloud] mt-[-10px] text-right text-7xl 2xl:text-9xl" >Lately</h1>
                </span>
                <div className="flex justify-end justify-items-end 2xl:mt-2">
                  <div className="w-full flex flex-col justify-between h-full">
                    <ProjectCard
                      title="Project name"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
                      imageUrl="../public/work/temp.jpg" // Make sure this image exists in your public folder
                    />
                    <ProjectCard
                      title="Project name"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
                      imageUrl="../public/work/temp.jpg" // Make sure this image exists in your public folder
                    />
                    <ProjectCard
                      title="Project name"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
                      imageUrl="../public/work/temp.jpg" // Make sure this image exists in your public folder
                    />
                    <div className="flex justify-end pr-3">
                      <HoverCard>
                        <HoverCardTrigger>
                          <button className="hover:underline 
                                            text-stone-800 font-[Instrument] 
                                            text-xl 2xl:text-3xl
                                            2xl:mt-1
                          ">Hover me</button>
                        </HoverCardTrigger>
                      </HoverCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* ---------------------------------------------------------------------- */}

              {/* padding is not consistent with other grids */}
            <div className="grid grid-cols-6 gap-0">
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-[transparent aspect-square text-center 
                flex items-center justify-center overflow-hidden">
                <img
                  src="/asterisk.svg"
                  alt="Asterisk"
                  className="w-max h-max object-contain"
                />
                </div>
              <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
              <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
              <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            </div>

            {/* ---------------------------------------------------------------------- */}

            <div id="first row of squares" className="grid grid-cols-2 gap-0">
            <div></div>
            <div className="col-start-2">
              <div className="grid grid-cols-3 gap-0">
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                  flex items-center justify-center overflow-hidden">
                    <img
                      src="/asterisk.svg"
                      alt="Asterisk"
                      className="w-max h-max object-contain"
                      id="asterisk asset"
                    />
                </div>
              </div>
            </div>
          </div>

                     {/* ---------------------------------------------------------------------- */}

        <div className="grid grid-col-2">
          {/* image */}
          <div>
            <img
                src="../public/work/temp.jpg"
                alt="That's a picture of me!"
                className="w-full h-full 
                          object-cover
                          h-[50%]
            "/>
          </div>
          {/* description */}
          <div>

          </div>
          <div className="ml-4 my-2 2xl:my-4
                      max-w-full h-32 2xl:h-80 sm:h-28
                      rounded-lg overflow-hidden 
                      bg-stone-100 shadow-xl 
                      flex flex-col sm:flex-row">
        {/* Left Image */}
          <div className="w-1/2 overflow-hidden">
            <img
              src="../public/work/temp.jpg"
              alt="That's a picture of me!"
              className="w-full h-full object-cover"
            />
          </div>  

        {/* Right Content */}
        <div className="w-full sm:w-full align-middle pl-4 pr-4 pt-4 pb-4 flex flex-col">
          <div>
            <h2 className="font-[Nowcloud]
                      text-5xl sm:text-xl
                      text-gray-900 
                      mb-4
            ">Sarah Haw</h2>
            <p className="
                    text-gray-800 
                    text-base sm:text-sm
                    mt-[-12px] 
            ">
              
            </p>
          </div>

          {/* Bottom Arrow Icon */}
          <div className="flex justify-end mt-6">
          </div>
        </div>
      </div>
        </div>


                     {/* ---------------------------------------------------------------------- */}

                     <div id="first row of squares" className="grid grid-cols-2 gap-0">
            <div></div>
            <div className="col-start-2">
              <div className="grid grid-cols-3 gap-0">
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                  flex items-center justify-center overflow-hidden">
                    <img
                      src="/asterisk.svg"
                      alt="Asterisk"
                      className="w-max h-max object-contain"
                      id="asterisk asset"
                    />
                </div>
              </div>
            </div>
          </div>

                     {/* ---------------------------------------------------------------------- */}

          
        </div>
      </div>
  );
};

export default About;
