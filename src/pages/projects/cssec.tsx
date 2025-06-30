import BackButton from '@/components/BackButton';
import React from "react";
import { FaFigma } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';

const Cssec: React.FC = () => {
  return (

    <div>
      <div className="min-h-screen sm:w-full
                                      flex pt-0 p-8
                                      text-stone-800 justify-center overflow-x-hidden mt-24">
        <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full
                                      flex flex-col items-center
                                      pt-0 p-8">
          
          <div className="justify-center justify-items-center  bg-[#FFBDC7] mb-12 pt-8">
                <div className="fixed top-32 left-12 z-50 hidden sm:block">
                    <BackButton />
                </div>

                <p className="font-[Instrument] justify-center
                                text-5xl 2xl:text-[6rem] lg:text-6xl 2xs:text-2xl
                                overflow-y-visible text-center
                                pt-16 pb-12 mb-6 w-[100vw]
                    ">CSSEC
            </p>
          </div>
        
          <div className="w-full text-center">
            <p className="font-[Instrument] 
                            text-xl 2xl:text-3xl
                            overflow-y-visible pb-10">
              2024 - 2025
              <br />
              Creatives Head
              
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
            <p className="font-[Roboto] justify-left text-xl 2xl:text-xl py-4">
              The Computer Studies Student Executive Council (CSSEC) at Ateneo 
              de Davao University is the official student leadership body representing 
              the Computer Studies Cluster. Through organizing tech-focused events, 
              offering peer support, 
              and fostering leadership development, the council empowers students to 
              excel inside and outside the classroom. With competence, dedication, 
              and a passion for innovation, CSSEC strives to unite the Computer Studies 
              community and create a positive, lasting impact on its members
              <br /><br />
              As the Creative’s Head, it’s my job to shape and elevate 
              our cluster’s narrative through imaginative visual storytelling and 
              engaging media. I develop the creative vision behind our promotional 
              materials, such as event posters, social media campaigns, and workshop 
              branding—with one clear aim: to capture and inspire our Computer Studies 
              community. I lead a passionate team of designers and content creators, 
              overseeing the entire creative process from concept to final design. 
              By ensuring brand consistency and injecting innovation into every 
              project, I help bring CSSEC’s mission and initiatives to life in a 
              way that resonates with students and faculty alike 
              
            </p>
          </div>

          <div className="w-full pt-8">
          <div className="grid grid-cols-6 gap-4 w-full">
            <div className="col-span-2 col-start-1 flex justify-center aspect-square
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/cssec/cssec001.jpg"
                  alt="Asterisk"
                  className="w-full h-full object-cover object-left"
                  id="asterisk asset"
                />
            </div>
            <div className="col-span-2 col-start-3 flex justify-center 
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/cssec/cssec002.jpg"
                  alt="Asterisk"
                  className="w-max object-contain"
                  id="asterisk asset"
                />
            </div>
            <div className="col-span-2 col-start-5 flex justify-center 
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/cssec/cssec003.jpg"
                  alt="Asterisk"
                  className="w-max object-contain"
                  id="asterisk asset"
                />
            </div>

            <div className="col-span-2 col-start-1 flex justify-center aspect-square
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/cssec/cssec004.jpg"
                  alt="Asterisk"
                  className="w-full h-full object-cover object-left"
                  id="asterisk asset"
                />
            </div>

            <div className="col-span-2 col-start-3 flex justify-center 
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/cssec/cssec005.jpg"
                  alt="Asterisk"
                  className="w-max object-contain"
                  id="asterisk asset"
                />
            </div>
            <div className="col-span-2 col-start-5 flex justify-center 
                items-center rounded-lg overflow-hidden">
                <img
                  src="/work/cssec/cssec006.jpg"
                  alt="Asterisk"
                  className="w-max object-contain"
                  id="asterisk asset"
                />
            </div>
            
          </div>
          <div>
              <p className="font-[Instrument] 
                              text-3xl 2xl:text-[2rem] lg:text-2xl 2xs:text-xl
                              overflow-y-visible text-left pt-16 w-[100vw]">
                  Tech Stack
              </p>
              <p className="font-[Roboto] justify-left text-xl 2xl:text-xl py-4">
                  Most visual assets were created using Canva, making it easy to 
                  produce clean, on-brand graphics quickly. For projects that 
                  required more flexibility or custom illustration, Figma and 
                  Procreate were occasionally used—ideal for precision layout 
                  work and hand-drawn elements. Organization was handled through 
                  Google Docs, Sheets, and Drive, which kept feedback, asset links, 
                  and timelines centralized and accessible for the entire team. This 
                  setup ensured fast turnarounds, consistent branding, and a smooth 
                  design-review process.
                  
              </p>
          </div>

          
        </div>
      </div>

      </div>
    </div>

  );
};

export default Cssec;
