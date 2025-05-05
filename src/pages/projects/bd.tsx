import React from "react";
import { FaFigma } from 'react-icons/fa';

const BD: React.FC = () => {
    return (

    <div>
        <div className="min-h-screen sm:w-full
                                        flex pt-0 p-8
                                        text-stone-800 justify-center overflow-x-hidden">
        <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full
                                        flex flex-col items-center
                                        pt-0 p-8">
            
            <div className="justify-center justify-items-center">
            <p className="font-[Instrument] justify-center
                            text-5xl 2xl:text-[6rem] lg:text-6xl 2xs:text-2xl
                            overflow-y-visible text-center
                            bg-[#FFEB81] p-20 mb-6 w-[100vw]
                ">Block Diary
            </p>
            </div>
        
            <div className="w-full text-center">
            <p className="font-[Instrument]
                            text-2xl 2xl:text-5xl
                                overflow-y-visible pb-10
                ">
                2024
                <br />
                Lead UX/UI Designer
                
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
            <p>Mobile Development</p>
            </div>
            </div>

            <div className="pr-2">
            <div className="flex bg-[#A3CED6] p-1 px-4 rounded-xl pr-4">
            {/* <SiTailwindcss className="mt-1 mr-2" /> */}
            <p>App Development</p>
            </div>
            </div>

            <div className="pr-2">
            <div className="flex bg-[#A3CED6] p-1 px-4 rounded-xl pr-4">
            {/* <SiTailwindcss className="mt-1 mr-2" /> */}
            <p>Prototype</p>
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
                Block Diary is a mobile companion app for Minecraft players 
                designed to help them log adventures, track coordinates, and 
                save build ideas. Created in just four days for the IT Week 
                2025 UI/UX Competition, the app includes three main screens: a 
                journal feed for documenting gameplay with screenshots and notes, 
                a location tracker for bookmarking coordinates of key in-game 
                landmarks, and a build library for saving public structure 
                inspirations. The output was a fully interactive Figma prototype 
                focused on usability, functionality, and user-centered design.

            </p>
            </div>

            <button
                onClick={() =>
                    window.open(
                    'https://www.figma.com/proto/4GeasETcLd8s7pIyNNZAyj/Where-is-it--%7C-Minecraft-UXUI-comp?page-id=8%3A1597&node-id=8-1610&p=f&viewport=-23%2C93%2C0.06&t=sPdTE3DqSQgg9ApL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A1610',
                    '_blank'
                    )}
                className="border border-black text-black px-16 py-4 rounded-full 
                font-[Instrument] text-2xl
                transition-transform duration-200 hover:scale-105 active:bg-black 
                active:text-white"
                >
                Try out the prototype ❋
            </button>

            <div className="w-full pt-12">
            <div className="grid grid-cols-6 gap-4 w-full">
            <div className="col-span-6 col-start-1 flex aspect-[6/3] rounded-lg overflow-hidden">
            <img
                src="/work/bd/bd001.jpg"
                className="w-full h-full object-cover object-left"
                id="asterisk asset"
            />
            </div>

            <div className="col-span-2 col-start-1 row-start-2 row-span-4
                            aspect-[2/4]
                    flex rounded-lg overflow-hidden">
            <img
                src="/work/bd/bd008.jpg"
                className="w-fullobject-cover object-top"
                id="asterisk asset"
            />
            </div>
            <div className="col-span-2 col-start-3 row-start-2 row-span-4
                            aspect-[2/4]
                    flex rounded-lg overflow-hidden">
            <img
                src="/work/bd/bd004.jpg"
                className="w-fullobject-cover object-top"
                id="asterisk asset"
            />
            </div>
            <div className="col-span-2 col-start-5 row-start-2 row-span-4
                            aspect-[2/4]
                    flex rounded-lg overflow-hidden">
            <img
                src="/work/bd/bd005.jpg"
                className="w-fullobject-cover object-top"
                id="asterisk asset"
            />
            </div>

            <div className="col-span-6 col-start-1 row-start-11 row-span-4
                            // aspect-[6/4]
                    flex rounded-lg overflow-hidden">
            <iframe
                src="https://embed.figma.com/design/4GeasETcLd8s7pIyNNZAyj/Where-is-it--%7C-Minecraft-UXUI-comp?node-id=8-1597&embed-host=share"
                allowFullScreen
                className="w-full h-full border-0"
            />
            </div>

            </div>

            <div>
            <p className="font-[Instrument]
                            text-5xl 2xl:text-[4rem] lg:text-4xl 2xs:text-2xl
                            overflow-y-visible text-left
                            pt-16 mb-6 w-[100vw]
                ">Process
            </p>
            <p className="font-[Roboto] justify-left
                            text-xl 2xl:text-xl 
                            py-5
            ">
                Given the brief, we hit the ground running—breaking down 
                requirements, mapping seamless user flows, and dividing tasks 
                to play to our strengths. I led the design process: sketching 
                wireframes, crafting reusable components, and transforming static 
                layouts into sleek, animated prototypes. We tested, tweaked, and 
                polished until everything clicked. In just four days, we turned 
                chaos into a cohesive, player-focused companion app.

            </p>
            </div>
            <div>
            <p className="font-[Instrument]
                            text-5xl 2xl:text-[4rem] lg:text-4xl 2xs:text-2xl
                            overflow-y-visible text-left
                            pt-16 mb-6 w-[100vw]
                ">Tech Stack
            </p>
            <p className="font-[Roboto] justify-left
                            text-xl 2xl:text-xl 
                            py-5
            ">
                All of this was built in Figma—from low-fidelity wireframes to 
                polished, interactive prototypes—bringing the entire experience 
                to life, one frame at a time.


            </p>
            </div>


        </div>
        </div>

        </div>
    </div>

    );
};

export default BD;
