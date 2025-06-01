import React from 'react';
const Contact: React.FC = () => {
  return (
    <div className="p-6 mt-24">
      <div className="w-full">
        <div className="grid grid-cols-[5fr_1fr] w-full">
          <div className="flex items-center justify-left">
              <p className="font-[Nowcloud]
                            text-8xl 2xl:text-[10rem]
                            leading-[0.8]
                            mt-4
              ">Find me<br />here</p>
              <div className="py-4 text-stone-700 inline-block p-4">
                <div className="flex">
                </div>
              </div>
          </div>
          
          <div className="flex items-center justify-end w-auto">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
