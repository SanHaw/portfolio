import React from "react";

const PM: React.FC = () => {

  return (
      <div id="whole page" className="min-h-screen sm:w-full
                                      flex pt-0 p-8 
                                      text-stone-800 justify-center overflow-x-hidden">
        <div id="whole page" className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full 
                                      flex flex-col justify-center items-center 
                                      pt-0 p-8 mt-24">

          <div className="grid grid-cols-6 gap-0 w-full">
            <div className=" col-start-4 col-span-3 flex">
              <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
              <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              <div className="w-full 
                                rounded-lg bg-[transparent aspect-square text-center
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
                     {/* ---------------------------------------------------------------------- */}

          <div className="grid grid-cols-[5fr_1fr] w-full">
            <div className="flex items-center justify-left">
              <span className="py-0">
                
                <p className="font-[Nowcloud] text-4xl 2xl:text-[8rem] lg:text-6xl 2xs:text:xl">PM</p>

              </span>
            </div>

            </div>

{/* add cards here */}
           {/* ---------------------------------------------------------------------- */}

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-6 flex">
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                    flex items-center justify-center overflow-hidden"></div>
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                  flex items-center justify-center overflow-hidden"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
                <div className="w-full 
                                rounded-lg bg-[transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/asterisk2.svg"
                      alt="Asterisk"
                      className="w-max h-max object-contain"
                      id="asterisk asset"
                    />
                </div>
                <div className="w-full 
                                rounded-lg h-full bg-transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/smiski4.png"
                      alt=""
                      className="h-full object-contain"
                      id="asterisk asset"
                    />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-3 flex">
                
                <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
              </div>
            </div>
          
        </div>
        </div>
    
  );
};

export default PM;
