import BackButton from '@/components/BackButton'; // adjust path if needed
import React from "react";
import { FaFigma } from 'react-icons/fa';


const NWSFD: React.FC = () => {
    return (

    <div>
        <div className="min-h-screen sm:w-full
                                        flex pt-0 p-8
                                        text-stone-800 justify-center overflow-x-hidden mt-24">
        <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full
                                        flex flex-col items-center
                                        pt-0 p-8">
            
            <div className="justify-center justify-items-center  bg-[#E8D0FF] mb-12 pt-8">
                <div className="fixed top-32 left-12 z-50 hidden sm:block">
                    <BackButton />
                </div>

                <p className="font-[Instrument] justify-center
                                text-5xl 2xl:text-[6rem] lg:text-6xl 2xs:text-2xl
                                overflow-y-visible text-center
                                pt-16 pb-12 mb-6 w-[100vw]
                    ">MISSCON 2024
                </p>
            </div>
        
            <div className="w-full text-center">
            <p className="font-[Instrument]
                            text-xl 2xl:text-3xl
                            overflow-y-visible pb-2
                ">
                2024
                <br />
                UX/UI Designer
                
            </p>
            </div>

            <div className="flex w-[70%] flex-wrap justify-center gap-y-2">
                <div className="pr-2">
                    <div className="flex bg-[#FFEB81] p-1 px-4 rounded-xl pr-4">
                        <FaFigma className="mt-1 mr-2" />
                        <p>Figma</p>
                </div>
            </div>

            <div className="pr-2">
            <div className="flex bg-[#A3CED6] p-1 px-4 rounded-xl pr-4">
            {/* <SiTailwindcss className="mt-1 mr-2" /> */}
            <p>Web Development</p>
            </div>
            </div>

            <div className="pr-2">
            <div className="flex bg-[#A3CED6] p-1 px-4 rounded-xl pr-4">
            {/* <SiTailwindcss className="mt-1 mr-2" /> */}
            <p>Agile</p>
            </div>
            </div>
        </div>

            <div className="w-full pt-8">
                <div className="grid grid-cols-6 gap-4 w-full">
                
                </div>
            </div>

            <div>
            <p className="font-[Roboto] justify-left
                            text-xl 2xl:text-xl
                            py-5
            ">
                The official website for MISSCon 2025 provides a sleek, responsive 
                platform for attendees to explore event details, speaker highlights, 
                and program timelines. Designed with clarity and professionalism in 
                mind, the site offers a seamless user experience while reflecting 
                the innovation and leadership spirit behind the Mindanao-wide 
                International Studies Students’ Convention.
                <br />
            </p>
            </div>

            <div className="w-full pt-12">
            <div className="grid grid-cols-6 gap-4 w-full">
            <div className="col-span-6 col-start-1 flex aspect-[6/3] rounded-lg overflow-hidden">
            <img
                src="/work/mssc/mssc001.jpg"
                className="w-full h-full object-cover object-top"
                id="asterisk asset"
            />
            </div>

            <div className="col-span-3 col-start-1 row-start-2 row-span-2
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/mssc/mssc003.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-4 row-start-2 row-span-2
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/mssc/mssc002.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-1 row-start-4 row-span-
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden object-cover object-bottom">
                <img
                    src="/work/mssc/mssc004.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-4 row-start-4 row-span-2
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/mssc/mssc005.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-6 col-start-1 row-start-11 row-span-4
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden ">
            <div>
                <p className="font-[Instrument]
                                text-3xl 2xl:text-[2rem] lg:text-2xl 2xs:text-xl
                                overflow-y-visible text-left
                                mb-4 w-[100vw]
                    ">Explore the Figma file
                </p>

                <iframe
                    src="https://embed.figma.com/design/5NhXWcr44GGvOvLbpW2cWr/-SYSDEV--NewsFeed-Website--Copy-?node-id=446-871&embed-host=share"
                    allowFullScreen
                    className="w-full h-full border-0"
                />
            </div>
            </div>

            </div>
            <div className="col-span-6 col-start-1 row-start-11 row-span-4 flex flex-col items-center gap-4 rounded-lg overflow-hidden">
                    <button
                        onClick={() =>
                            window.open(
                            'https://misscon2025.info',
                            '_blank'
                            )}
                        className="border border-black text-black px-16 py-4 my-4 rounded-full 
                        font-[Instrument] text-2xl
                        transition-transform duration-200 hover:scale-105 active:bg-black 
                        active:text-white" 
                        >
                        See the Website Here ❋
                    </button>
                </div>

            <div>
                <p className="font-[Instrument]
                                text-3xl 2xl:text-[2rem] lg:text-2xl 2xs:text-xl
                                overflow-y-visible text-left
                                pt-16 w-[100vw]
                    ">Process
                </p>
                <p className="font-[Roboto] justify-left
                            text-xl 2xl:text-xl 
                            py-4
                ">
                We were briefed on the event’s progress and provided with the official 
                branding and content. From there, we explored the best layout approach 
                to present everything clearly and cohesively. After aligning structure 
                with visual identity, we designed the final interface with both clarity 
                and engagement in mind.
                </p>
            </div>

            <div>
            <p className="font-[Instrument]
                            text-3xl 2xl:text-[2rem] lg:text-2xl 2xs:text-xl
                            overflow-y-visible text-left
                            pt-16 w-[100vw]
                ">Tech Stack
            </p>
            <p className="font-[Roboto] justify-left
                            text-xl 2xl:text-xl 
                            py-4
            ">
                Project assets and content were organized through Google Docs, 
                streamlining collaboration from the start. With the branding kit 
                on hand, we designed the full user interface in Figma—translating 
                ideas into clean, functional visuals while keeping everything aligned 
                with the event’s identity.


            </p>
            </div>
        </div>
        </div>
        </div>
    </div>

    );
};

export default NWSFD;
