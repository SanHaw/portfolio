import React from 'react';

const Elysan: React.FC = () => {
  return (
    <div className='justify-items-center py-10'>
      <div className="justify-items-center justify-center
                      w-[60%] max-w-[60%]">
        <div>
          <p className="font-[Instrument] justify-center
                              text-5xl 2xl:text-[10rem] lg:text-7xl 2xs:text-2xl
                              overflow-y-visible pb-10
          ">Elysan Design Studio</p>
        </div>
      
      <div>
        <p className="font-[Roboto] justify-left
                      text-2xl
                      py-5
        ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
          est laborum.
        </p>
      </div></div>
      
      <div className="w-[60%] h-100 max-w-[60%] flex justify-center overflow-hidden">
        <img src="/work/temp.jpg" alt="" />
        <img src="/work/temp.jpg" alt="" />
        <img src="/work/temp.jpg" alt="" />
      </div>
    </div>
  );
};

export default Elysan;
