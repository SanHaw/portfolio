import React from 'react';

const handleButtonClick = () => {
  alert('Button clicked!');
};

const GraphicDesign: React.FC = () => {
  return (
    <div id="whole page" className="min-h-screen flex pt-0 p-8 text-stone-800 justify-center justify-items-center overflow-x-hidden">
    <div id="whole page" className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full flex flex-col justify-center items-center pt-0 p-8">

      <div id="first row of squares" className="grid grid-cols-2 gap-0">
        <div>
        </div>

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

      
    </div></div>
  );
};

export default GraphicDesign;
