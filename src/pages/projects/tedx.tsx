import BackButton from '@/components/BackButton';
import React from "react";
import { FaFigma } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';

const Tedx: React.FC = () => {
  return (

    <div>
      <div className="min-h-screen sm:w-full
                                      flex pt-0 p-8
                                      text-stone-800 justify-center overflow-x-hidden mt-24">
        <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full
                                      flex flex-col items-center
                                      pt-0 p-8">
          
          <div className="justify-center justify-items-center  bg-[#FFBDC7] mb-12">
                <div className="fixed top-32 left-12 z-50 hidden sm:block">
                    <BackButton />
                </div>

                <p className="font-[Instrument] justify-center
                                text-5xl 2xl:text-[6rem] lg:text-6xl 2xs:text-2xl
                                overflow-y-visible text-center
                                bg-[#FFEB81] pt-16 pb-12 mb-6 w-[100vw]
                    ">TEDxLanang Ave
            </p>
          </div>
        
          <div className="w-full text-center">
            <p className="font-[Instrument]
                            text-2xl 2xl:text-5xl
                              overflow-y-visible pb-10
              ">
              2024
              <br />
              Branding Head
              
            </p>
          </div>

          <div className="flex w-[70%]  flex-wrap justify-center">
          <div className="pr-2">
            <div className="flex bg-[#FFEB81] p-1 px-4 rounded-xl pr-4">
              <FaFigma className="mt-1 mr-2" />
              <p>Figma</p>
            </div>
          </div>
          <div className="pr-2">
            <div className="flex bg-[#E8D0FF] p-1 px-4 rounded-xl pr-4">
            <SiCanva className="mt-1 mr-2" />
            <p>Canva</p>
            </div>
          </div>
          <div className="pr-2">
            <div className="flex bg-[#A3CED6] p-1 px-4 rounded-xl pr-4">
            {/* <SiTailwindcss className="mt-1 mr-2" /> */}
            <p>Graphic Design</p>
            </div>
          </div>
        </div>

          <div className="w-full pt-8">
              <div className="grid grid-cols-6 gap-4 w-full">
                
              </div>
            </div>

          <div>
            <p className="font-[Roboto] justify-left
                          text-xl 2xl:text-3xl
                          py-5
            ">
              TEDxLanang Ave is an independently organized TEDx event held in 
              Davao City that brings together thought leaders, creatives, and 
              changemakers to share ideas worth spreading. Rooted in the spirit 
              of innovation and community, the event features diverse speakers 
              who inspire progress through powerful storytelling and local impact.
              <br /><br />
              As the Branding Head for TEDxLanang Ave, my goal was to place 
              Mindanao’s vibrant cultural identity at the heart of the event’s 
              visual direction. I carefully balanced traditional elements—such 
              as indigenous patterns, regional color palettes, and symbolic 
              imagery—with TEDx’s globally recognized branding standards. This 
              approach ensured that while the event reflected the uniqueness and 
              richness of Mindanao, it remained consistent with TEDx’s professional 
              and minimalist aesthetic. The result was a cohesive and culturally 
              grounded visual experience that resonated with both local audiences 
              and the broader TEDx community.
              
            </p>
          </div>

          <div className="w-full pt-8">
          <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-6 col-start-1 flex aspect-[6/2] rounded-lg overflow-hidden">
            <img
              src="/work/tedx/tedx001.jpg"
              alt="Asterisk"
              className="w-full h-full object-cover object-left"
              id="asterisk asset"
            />
          </div>

            <div className="col-span-2 col-start-1 flex justify-center aspect-square
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/tedx/tedx008.jpg"
                  alt="Asterisk"
                  className="w-full h-full object-cover object-left"
                  id="asterisk asset"
                />
            </div>

            <div className="col-span-2 col-start-3 flex justify-center 
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/tedx/tedx005.jpg"
                  alt="Asterisk"
                  className="w-max object-contain"
                  id="asterisk asset"
                />
            </div>
            <div className="col-span-2 col-start-5 flex justify-center 
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/tedx/tedx004.jpg"
                  alt="Asterisk"
                  className="w-max object-contain"
                  id="asterisk asset"
                />
            </div>

            <div className="col-span-6 col-start-1 flex justify-center 
                items-start rounded-lg overflow-hidden">
                <img
                  src="/work/tedx/tedx006.jpg"
                  alt="Asterisk"
                  className="w-max object-contain"
                  id="asterisk asset"
                />
            </div>
          </div>

          
        </div>
      </div>

      </div>
    </div>

  );
};

export default Tedx;
