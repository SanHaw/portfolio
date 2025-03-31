import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Card from '../components/Card.tsx';

const GraphicDesign: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Use the navigate function in handleCardClick to navigate to the link
  const handleCardClick = (link: string) => {
    navigate(link); // Navigate to the path specified in the link
  };

  return (
    <div id="whole page" className="min-h-screen 
                                    flex pt-0 px-20 text-stone-800 
                                    justify-center align-top 
                                    max-w-full overflow-x-hidden">
      <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full 
                                      flex flex-col justify-start align-middle items-center 
                                      pt-0 p-8">
        
      <div id="first row of squares" className="grid grid-cols-2 gap-0">
            <div></div>
            <div className="col-start-2">
              <div className="grid grid-cols-3 gap-0">
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
          </div>

                     {/* ---------------------------------------------------------------------- */}

          <div className="grid grid-cols-[5fr_1fr] w-full">
            <div className="flex items-center justify-left">
              <span className="py-0">
                <p className="font-[Instrument] 
                              text-3xl 2xl:7xl
                ">Hi there, I do</p>
                <p className=" font-[Nowcloud] 
                                text-6xl 2xl:text-[10rem] lg:text-9xl 2xs:text:2xl
                ">Graphic Design</p>
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

        <div className="mt-10 flex flex-wrap justify-center items-start h-auto w-full gap-4">
          <Card
            title="Elysan Design Studio"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/elysan" // Path to navigate to
          />
          <Card
            title="TEDxLanang Ave"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/tedx" // Path to navigate to
          />
          <Card
            title="CSSEC 2023-2024"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/cssec" // Path to navigate to
          />
          <Card
            title="Chammie Carnival"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/chammie" // Path to navigate to
          />
          <Card
            title="Mooncake Festival 2024"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/mooncake" // Path to navigate to
          />
          <Card
            title="Purple Up: Kick-Off 2023"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/purpleup" // Path to navigate to
          />
          <Card
            title="IT Week 2024"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/itweek" // Path to navigate to
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
