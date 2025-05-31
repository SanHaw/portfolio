import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const GraphicDesign: React.FC = () => {
  const navigate = useNavigate(); 

  const handleCardClick = (cardTitle: string) => {
    console.log(`${cardTitle} clicked!`);
  };

  const cards = [
    {
      title: 'Elysan Design',
      description: 'FOUNDER | GRAPHIC DESIGNER',
      imageUrl: '/work/eds/eds007.jpg',
      link: '/projects/elysan',
      onCardClick: () => handleCardClick('Elysan Design'),
    },
    {
      title: 'TEDxLanang Ave',
      description: 'BRANDING HEAD',
      imageUrl: '/work/tedx/tedx001.jpg',
      link: '/projects/tedx',
      onCardClick: () => handleCardClick('tedx'),
    },
    {
      title: 'Chammie Carnival',
      description: 'Explore the Elysan project!',
      imageUrl: '/work/temp.jpg',
      link: '/projects/elysan',
      onCardClick: () => handleCardClick('Elysan Design'),
    },
    {
      title: 'CS Student Executive Council',
      description: 'Explore the Elysan project!',
      imageUrl: '/work/temp.jpg',
      link: '/projects/elysan',
      onCardClick: () => handleCardClick('Elysan Design'),
    },
    {
      title: 'Mooncake Festival 2024',
      description: 'Explore the Elysan project!',
      imageUrl: '/work/temp.jpg',
      link: '/projects/elysan',
      onCardClick: () => handleCardClick('Elysan Design'),
    },
    {
      title: 'Purple Up: Kick Off',
      description: 'Explore the Elysan project!',
      imageUrl: '/work/temp.jpg',
      link: '/projects/elysan',
      onCardClick: () => handleCardClick('Elysan Design'),
    },
    {
      title: 'IT Week 2024',
      description: 'Explore the Elysan project!',
      imageUrl: '/work/temp.jpg',
      link: '/projects/elysan',
      onCardClick: () => handleCardClick('Elysan Design'),
    },
    {
      title: 'Cham-along With Us',
      description: 'Explore the Elysan project!',
      imageUrl: '/work/temp.jpg',
      link: '/projects/elysan',
      onCardClick: () => handleCardClick('Elysan Design'),
    }
  ];



  return (
    
      <div className="min-h-screen sm:w-full
                                      flex pt-0 p-8
                                      text-stone-800 justify-center overflow-x-hidden">
        <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full
                                      flex flex-col items-start
                                      pt-0 p-8">


          {/* First Row of Squares */}
          <div id="first row of squares" className="grid grid-cols-2 gap-0">
            <div></div>
            <div className="col-start-2">
              <div className="grid grid-cols-3 gap-0">
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden">
                  <img src="/asterisk.svg" alt="Asterisk" className="w-max h-max object-contain" id="asterisk asset" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-[5fr_1fr] w-full">
            <div className="flex items-center justify-left">
              <span className="py-0">
                <p className="font-[Instrument] text-3xl 2xl:7xl">Hi there, I do</p>
                <p className="font-[Nowcloud] text-6xl 2xl:text-[10rem] lg:text-8xl 2xs:text:2xl">Graphic<br />Design</p>
              </span>
            </div>

            <div className="flex items-center justify-end w-auto">
              <div className="flex flex-col gap-y-0 w-full">
                <div className="w-full aspect-square bg-[#6EAA87] rounded-md"></div>
                <div className="w-full aspect-square bg-[#A3CED6] rounded-md"></div>
                <div className="w-full aspect-square bg-[#FFEB81] rounded-md"></div>
              </div>
            </div>
          

          {/* Cards Grid */}
          <div className="grid col-span-2 grid-cols-1 
            sm:grid-cols-2 gap-6 auto-rows-fr items-stretch mt-10">

            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                link={card.link}
                onCardClick={card.onCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
