import React from "react";

const Projects: React.FC = () => {
  return (
    <div
      id="whole page"
      className="min-h-screen sm:w-full flex pt-0 p-8 text-stone-800 justify-center overflow-x-hidden"
    >
      <div
        id="whole page"
        className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full flex flex-col justify-center items-center pt-0 p-8 mt-24"
      >
        {/* Decorative Grid */}
        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-4 col-span-3 flex">
            <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg aspect-square text-center flex items-center justify-center overflow-hidden">
              <img
                src="/asterisk.svg"
                alt="Asterisk"
                className="w-max h-max object-contain"
              />
            </div>
          </div>
        </div>

        {/* Projects Header */}
        <div className="grid grid-cols-[5fr_1fr] w-full">
          <div className="flex items-center justify-left">
            <p className="font-[Nowcloud] text-4xl 2xl:text-[8rem] lg:text-6xl 2xs:text:xl">
              Projects
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-2 col-span-4 flex flex-col sm:flex-row justify-center gap-8 p-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center group cursor-pointer w-[300px]">
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src="computer101.png"
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="computer001.png"
                  className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <p className="mt-4 font-[Instrument] text-4xl text-center text-black group-hover:text-[#4995A2] transition-colors duration-300">
                UX/UI Designer
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center group cursor-pointer w-[300px]">
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src="computer102.png"
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="computer002.png"
                  className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <p className="mt-4 font-[Instrument] text-4xl text-center text-black group-hover:text-[#4995A2] transition-colors duration-300">
                Graphic Designer
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center group cursor-pointer w-[300px]">
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src="computer103.png"
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="computer003.png"
                  className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <p className="mt-4 font-[Instrument] text-4xl text-center text-black group-hover:text-[#4995A2] transition-colors duration-300">
                Project Manager
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Grids */}
        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-1 col-span-6 flex">
            <div className="w-full rounded-lg aspect-square"></div>
            <div className="w-full rounded-lg aspect-square"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
            <div className="w-full rounded-lg aspect-square text-center flex items-center justify-center overflow-hidden">
              <img
                src="/asterisk2.svg"
                alt="Asterisk"
                className="w-max h-max object-contain"
              />
            </div>
            <div className="w-full rounded-lg aspect-square text-center flex items-center justify-center overflow-hidden">
              <img
                src="/smiski4.png"
                alt=""
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-1 col-span-3 flex">
            <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
