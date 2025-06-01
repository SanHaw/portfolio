import React from 'react';
const Page404: React.FC = () => {
  return (
    <div className="p-6 mt-24">
      <div className="w-full">
        <div className="gw-full">
          <div className="flex flex-col items-center justify-center">
              <p className="font-[Nowcloud]
                            text-[10rem] 2xl:text-[10rem]
                            leading-[0.8]
                            mt-4 justify-center
              ">404</p>
              
              <p className="font-[Instrument]
                            text-4xl xl:text-xl
                            leading-[0.8]
                            mt-12 justify-center
              ">This page doesn't exist in this universe :((</p>
              <div className="py-4 text-stone-700 inline-block p-4">
                
              </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Page404;
