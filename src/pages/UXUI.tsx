import BackButton from '@/components/BackButton';
import React from 'react';
import Card from '../components/Card';

const UXUI: React.FC = () => {

  const handleCardClick = (cardTitle: string) => {
    console.log(`${cardTitle} clicked!`);
  };

  const cards = [
    {
      title: 'Minecraft Companion App',
      description: 'LEAD UX/UI DESIGNER',
      imageUrl: '/work/bd/bd001.jpg',
      link: '/projects/bd',
      onCardClick: () => handleCardClick('Block Diary'),
    },
    // {
    //   title: 'SAMAHAH Systems Development Website',
    //   description: 'LEAD UX/UI DESIGNER',
    //   imageUrl: '/work/sysdev/sysd001.jpg',
    //   link: '/projects/sysdev',
    //   onCardClick: () => handleCardClick('SYSDEV'),
    // },
    {
      title: 'SAMAHAN Newsfeed',
      description: 'PROJECT MANAGER',
      imageUrl: '/work/nwsfd/nwsfd000.jpg',
      link: '/projects/nwsfd',
      onCardClick: () => handleCardClick('NWSFD'),
    },
    {
      title: 'MISSCON 2024 Website',
      description: 'UX/UI DESIGNER',
      imageUrl: '/work/mssc/mssc000.jpg',
      link: '/projects/mssc',
      onCardClick: () => handleCardClick('MISSCON 24'),
    },
    {
      title: 'Divine Jewels Retail Management System',
      description: 'LEAD UX/UI DESIGNER',
      imageUrl: '/work/djpos/djpos001.jpg',
      link: '/projects/djpos',
      onCardClick: () => handleCardClick('Divine Jewels'),
    }
    // {
    //   title: 'SAMAHAN All for More Website',
    //   description: 'UX/UI DESIGNER',
    //   imageUrl: '/work/afm/afm001.jpg',
    //   link: '/projects/afm',
    //   onCardClick: () => handleCardClick('All for More'),
    // }
  ];

  return (
    <div>
      <div id="whole page" className="min-h-screen sm:w-full
                                      flex pt-0 p-8
                                      text-stone-800 justify-center overflow-x-hidden mt-24">
        <div id="whole page" className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full
                                      flex flex-col items-start
                                      pt-0 p-8">

          <div className="fixed top-32 left-12 z-50 hidden sm:block">
                            <BackButton />
                        </div>
          {/* First Row of Squares */}
          <div id="first row of squares" className="grid grid-cols-2 gap-0 w-full justify-end">
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
                <p className="font-[Instrument] text-4xl 2xl:xl">Hi there, I do</p>
                <p className="font-[Nowcloud] text-4xl 2xl:text-[8rem] lg:text-6xl 2xs:text:xl">Dev &<br />Design</p>
              </span>
            </div>

            <div className="flex items-center justify-end w-auto">
              <div className="flex flex-col gap-y-0 w-full">
                <div className="w-full aspect-square bg-[#6EAA87] rounded-md"></div>
                <div className="w-full aspect-square bg-[#A3CED6] rounded-md"></div>
                {/* <div className="w-full aspect-square bg-[#FFEB81] rounded-md"></div> */}
              </div>
            </div>
          

          {/* Cards Grid */}
          <div className="grid col-span-2 grid-cols-1 sm:grid-cols-2 gap-6 
            auto-rows-fr items-stretch mt-10">

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
          </div></div>

          <div className="grid grid-cols-6 gap-0 w-full">
            <div className="col-start-1 col-span-6 flex items-left justify-left">
              <span className="py-0">
                <p className="pt-8 mt-12 font-[Instrument] text-5xl">
                  See My UX/UI Resume ☼
                </p>
                
              </span>
            </div>
          
          
          <div className="flex w-full col-start-1 col-span-6 rounded-lg overflow-hidden py-8
                          justify-center items-center">
            <a
                    href="/resume/Sarah-Haw-Resume-UXUI.pdf"
                    download
                    className="border border-black text-black px-16 py-4 my-4 
                                rounded-full font-[Instrument] text-2xl transition-transform 
                                duration-200 hover:scale-105 active:bg-black active:text-white
                                "
                  >
                    ⬇ Download PDF
                  </a>
          </div>
          
          <div className="col-start-2 col-span-4 aspect-[210/270] w-full rounded-lg overflow-hidden">
            <iframe
              src="/resume/Sarah-Haw-Resume-UXUI.pdf"
              className="w-full h-full"
              title="PDF Preview"
            >
            </iframe>
            
        </div></div>

        </div>
      </div>
    </div>
  );
};

export default UXUI;
