import React from 'react';

const Elysan: React.FC = () => {
  return (
    <div className='justify-items-center pt-10'>
      <div className="bg-red-100 justify-items-center justify-center
                      w-[60%] max-w-[60%]">
        <div>
          <p className="font-[Instrument] justify-center
                              text-6xl 2xl:text-[10rem] lg:text-8xl 2xs:text:2xl
                              overflow-y-visible pb-10
          ">Elysan Design Studio</p>
        </div>
      </div>
      
      <div className="w-[60%] h-100 max-w-[60%] flex justify-center overflow-hidden">
        <img src="/work/temp.jpg" alt="" />
        <img src="/work/temp.jpg" alt="" />
        <img src="/work/temp.jpg" alt="" />
      </div>
    </div>
  );
};

export default Elysan;
