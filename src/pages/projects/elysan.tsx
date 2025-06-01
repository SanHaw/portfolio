import ImageSlider from "@/components/ImageSlider";
import React from "react";
import { SiCanva } from "react-icons/si";


const Elysan: React.FC = () => {
  return (

    <div>
      <div className="min-h-screen sm:w-full
                                      flex pt-0 p-8
                                      text-stone-800 justify-center overflow-x-hidden mt-24">
        <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full
                                      flex flex-col items-center
                                      pt-0 p-8">
          <div className="justify-center justify-items-center">
            <p className="font-[Instrument] justify-center
                              text-5xl 2xl:text-[6rem] lg:text-6xl 2xs:text-2xl
                              overflow-y-visible text-center
                              bg-[#FFEB81] p-20 mb-6 w-[100vw]
              ">Elysan Design Studio
            </p>
          </div>
        
          <div className="w-full text-center">
            <p className="font-[Instrument]
                            text-2xl 2xl:text-5xl
                              overflow-y-visible pb-10
              ">
              Online Business | 2022 - present
              <br />
              Founder | Graphic Designer | Customer Service | Social Media Manager
              
            </p>
          </div>

          <div>
            <p className="font-[Roboto] justify-left
                          text-xl 2xl:text-3xl
                          py-5
            ">
              Elysan Design Studios, a digital design brand I launched in 2022 
              on TikTok. What started as a creative outlet has now grown into 
              a small business with over 3,000 followers, 73,000 likes, and 
              200+ recurring clients. With  Elysan Design Studios, I create 
              posters, infographics— information designs and even branding 
              kits for people in the academe and small businesses.
              
            </p>
          </div>

          <div className="flex w-[70%] flex-shrink-0 whitespace-nowrap justify-center">
                              
          <div className="pr-2">
            <div className="flex bg-[#E8D0FF] p-1 px-4 rounded-xl pr-4">
            <SiCanva className="mt-1 mr-2" />
            <p>Canva</p>
            </div>
          </div>

          <div className="pr-2">
            <div className="flex bg-[#E8D0FF] p-1 px-4 rounded-xl pr-4">
            <SiCanva className="mt-1 mr-2" />
            <p>Canva</p>
            </div>
          </div>

          <div className="pr-2">
            <div className="flex bg-[#FFEB81] p-1 px-4 rounded-xl pr-4">
              {/* <FaFigma className="mt-1 mr-2" /> */}
              <p>Graphic Design</p>
            </div>
          </div>

          <div className="pr-2">
            <div className="flex bg-[#FFEB81] p-1 px-4 rounded-xl pr-4">
              {/* <FaFigma className="mt-1 mr-2" /> */}
              <p>Information Design</p>
            </div>
          </div>
          
          <div className="pr-2">
            <div className="flex bg-[#FFEB81] p-1 px-4 rounded-xl pr-4">
              {/* <FaFigma className="mt-1 mr-2" /> */}
              <p>Customer Service</p>
            </div>
          </div>
        </div>

          <div className="w-full pt-8">
              <div className="grid grid-cols-6 gap-4 w-full">
                
              <ImageSlider className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-1 col-span-2 row-start-1 row-span-2
                                bg-cover bg-right aspect-square
                                " />
                                {/* EDS: your next design solution */}
                
                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-3 col-span-2 row-start-1 row-span-1
                                bg-cover bg-top  aspect-[2/1]
                                bg-[url('/work/eds/eds101.jpg')]">
                                {/* thyroid cancer */}
                </div>
                
                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-6 col-span-1 row-start-1 row-span-1
                                bg-cover bg-right aspect-square
                                bg-[url('/work/eds/eds002.jpg')]">
                                {/* check out na yan */}
                </div>

                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-3 col-span-1 row-start-2 row-span-1
                                bg-cover bg-top aspect-square
                                bg-[url('/work/eds/eds103.jpg')]">
                                {/* ethanol  */}
                </div>
                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-4 col-span-1 row-start-2 row-span-2
                                bg-cover bg-top aspect-[1/2]
                                bg-[url('/work/eds/eds116.jpg')]">
                                {/* construction */}
                </div>
                <div className="relative rounded-lg bg-transparent text-center
                flex items-center justify-center overflow-hidden
                ccol-start-5 col-span-2 row-start-2 row-span-3
                bg-cover bg-top aspect-[2/3]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  >
                    <source src="/work/eds/eds000.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* IG feed video */}
                </div>

                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-2 col-span-2 row-start-3 row-span-3
                                bg-cover bg-top  aspect-[2/3]
                                bg-[url('/work/eds/eds107.jpg')]">
                                {/* defend the press */}
                </div>
                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-1 col-span-1 row-start-4 row-span-1
                                bg-cover bg-top  aspect-square
                                bg-[url('/work/eds/eds105.jpg')]">
                                  {/* international business */}
                </div>

                
                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-1 col-span-1 row-start-5 row-span-2
                                bg-cover bg-top aspect-[1/2]
                                bg-[url('/work/eds/eds110.jpg')]">
                                {/* sex health */}
                </div>
                {/* <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-4 col-span-1 row-start-4 row-span-1
                                bg-cover bg-top aspect-square
                                bg-[url('/work/eds/eds104.jpg')]">
                                {/* f1 */}
                {/* </div>  */}

                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-4 col-span-2 row-start-5 row-span-1
                                bg-cover bg-top aspect-[2/1]
                                bg-[url('/work/eds/eds114.jpg')]">
                                {/* christmas camp */}
                </div>
                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-6 col-span-1 row-start-5 row-span-1
                                bg-cover bg-top aspect-square
                                bg-[url('/work/eds/eds108.jpg')]">
                                {/* f1 */}
                </div>

                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-2 col-span-1 row-start-7 row-span-1
                                bg-cover bg-top aspect-square
                                bg-[url('/work/eds/eds102.jpg')]">
                                {/* periodic table */}
                </div>
                <div className="rounded-lg bg-[transparent text-center
                                flex items-center justify-center overflow-hidden
                                col-start-3 col-span-3 row-start-6 row-span-2
                                bg-cover bg-top aspect-3/2
                                bg-[url('/work/eds/eds112.jpg')]">
                                {/* periodic table */}
                </div>

              </div>
            </div>
          

        </div>
      </div>
    </div>

  );
};

export default Elysan;
