import React from 'react';
import Card from '../components/Card.tsx';

const handleCardClick = () => {
  alert('Button clicked!');
};

const GraphicDesign: React.FC = () => {
  return (
    <div id="whole page" className="min-h-screen 
                                  flex 
                                  pt-0 p-8 
                                  text-stone-800 
                                  justify-center align-top overflow-x-hidden">
    <div id="whole page" className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full 
                                  flex flex-col 
                                  justify-start align-middle items-center
                                  pt-0 p-8">

      <div id="first row of squares" className="grid grid-cols-2 gap-0">
        <div>
        </div>

        <div className="col-start-2">
          <div className="grid grid-cols-3 gap-0">
            <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center
              flex align-middle items-center overflow-hidden">
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

      <div className="grid grid-cols-[5fr_1fr] w-full">
        <div className="flex items-center justify-left">
          <span className="py-0">
            <p className="font-[Instrument] text-4xl 2xl:w-xl
            ">Hi there, I do</p>
            <p className="font-[Nowcloud]
                          text-8xl 2xl:text-[10rem]
                          leading-[0.8]
                          mt-4
            ">Graphic<br />Design</p>
            <div className="py-4 text-stone-700 inline-block p-4">
              <div className="flex">
              </div>
            </div>
          </span>
        </div>
        
        <div className="flex items-center justify-end w-auto">
          <div className="flex flex-col gap-y-0 w-full">
            <div className="w-full aspect-square bg-[#6EAA87] rounded-md"></div>
            <div className="w-full aspect-square bg-[#A3CED6] rounded-md"></div>
            <div className="w-full aspect-square bg-[#FFEB81] rounded-md"></div>
          </div>
        </div>
        </div>


        <div className="col-start-2 col-span-4 grid
                        grid-cols-3 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-
                        mt-10 space-x-5 space-y-5
                        
        ">
          <div className="col-span-1">
            
          </div>
        </div>

        <div className="mt-10 flex justify-center items-start h-auto w-full space-x-5">
          <Card
          title="Sample Card Title"
          description="This is a description for the card. It will be truncated if it's too long."
          imageUrl="public/work/temp.jpg"
          onCardClick={handleCardClick}
          link="https://www.example.com" // Link where the user will be navigated
        />
        <Card
          title="Sample Card Title"
          description="This is a description for the card. It will be truncated if it's too long."
          imageUrl="public/work/temp.jpg"
          onCardClick={handleCardClick}
          link="https://www.example.com" // Link where the user will be navigated
        />
        <Card
          title="Sample Card Title"
          description="This is a description for the card. It will be truncated if it's too long."
          imageUrl="public/work/temp.jpg"
          onCardClick={handleCardClick}
          link="https://www.example.com" // Link where the user will be navigated
        />
        </div>


      </div>
    </div>
  );
};

export default GraphicDesign;
