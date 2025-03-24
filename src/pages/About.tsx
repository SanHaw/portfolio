import React from "react";
// import '../styling/Tag.css';

const About: React.FC = () => {
  return (
    <div className="w-full pt-0 p-8">

      <div className="grid grid-cols-2 gap-0">
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
                />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[5fr_1fr] w-full">
        <div className="flex items-center justify-left">
          <span className="py-20">
            <p className="font-[Instrument] text-5xl">Hi there, I'm</p>
            <p className=" font-[Nowcloud] text-9xl">Sarah</p>
            <p className="font-[Instrument] text-3xl">UI/UX Designer | Graphic Designer | Computer Science</p>
            <div className="py-4 text-stone-800 inline-block p-4">
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
        <div className="flex items-center justify-end w-full">
          <div className="flex flex-col gap-y-2 w-full">
            <div className="w-full aspect-square bg-[#6EAA87] rounded-md"></div>
            <div className="w-full aspect-square bg-[#A3CED6] rounded-md"></div>
            <div className="w-full aspect-square bg-[#FFEB81] rounded-md"></div>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-6 gap-0">
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center 
              flex items-center justify-center overflow-hidden">
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center 
              flex items-center justify-center overflow-hidden"></div>
            <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center 
              flex items-center justify-center overflow-hidden">
                <img
                  src="/asterisk.svg"
                  alt="Asterisk"
                  className="w-max h-max object-contain"
                />
            </div></div>

    </div>
  
    </div>
  );
};

export default About;
