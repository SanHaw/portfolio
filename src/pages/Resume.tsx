import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="p-6 mt-24">
      <div className="grid grid-cols-[5fr_1fr] w-full">
        <div className="flex items-center justify-left">
          <span className="py-0">
            <p className="font-[Instrument] text-4xl 2xl:w-xl
            ">See my</p>
            <p className="font-[Nowcloud]
                          text-8xl 2xl:text-[10rem]
                          leading-[0.8]
                          mt-4
            ">Resume</p>
            <div className="py-4 text-stone-700 inline-block p-4">
              <div className="flex">
              </div>
            </div>
          </span>
        </div>
        
        <div className="flex items-center justify-end w-auto">
          <div></div>
        </div>
        </div>
    </div>
  );
};

export default Resume;
