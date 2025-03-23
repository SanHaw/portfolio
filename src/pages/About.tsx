import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full p-8 pt-0">

      <div className="grid grid-cols-2 gap-0">
        <div></div>
        <div className="col-start-2">
          <div className="grid grid-cols-3 gap-0">
            <div className="rounded-lg bg-[#E8D0FF] aspect-square"></div>
            <div className="rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="rounded-lg bg-[transparent aspect-square text-center 
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

      <div className="grid grid-cols-[5fr_1fr] h-screen w-full">
      <div className="flex items-center justify-left">
        <span>
          <p className="font-[Instrument] text-5xl">Hi there, I'm</p>
          <p className=" font-[Nowcloud] text-9xl">Sarah</p>
          <p className="font-[Instrument] text-3xl">UI/UX Designer | Graphic Designer | Computer Science</p>
        </span>
      </div>
      <div className="bg-red-200 flex items-center justify-center">
        <p className="text-xl">Sidebar (1fr)</p>
      </div>
    </div>
  
    </div>
  );
};

export default About;
