import BackButton from '@/components/BackButton'; // adjust path if needed
import React from "react";
import { FaFigma } from 'react-icons/fa';


const Sysdev: React.FC = () => {
    return (

    <div>
        <div className="min-h-screen sm:w-full
                                        flex pt-0 p-8
                                        text-stone-800 justify-center overflow-x-hidden mt-24">
        <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full
                                        flex flex-col items-center
                                        pt-0 p-8">
            
            <div className="justify-center justify-items-center  bg-[#FFBDC7] mb-12">
                <div className="w-full h-auto pt-4 pl-4">
                    <BackButton />
                </div>
                <p className="font-[Instrument] justify-center
                                text-4xl 2xl:text-[4rem] lg:text-6xl 2xs:text-2xl
                                overflow-y-visible text-center
                                bg-[#FFBDC7] pb-12 mb-6 w-[100vw]
                ">SAMAHAN Systems Development
            </p>
            </div>
        
            <div className="w-full text-center">
            <p className="font-[Instrument]
                            text-xl 2xl:text-3xl
                            overflow-y-visible pb-4
                ">
                2025
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
                            py-4
            ">
                Divine Jewels is a local small business specializing in handcrafted 
                trinkets and accessories. As the business grew, so did the need for 
                a more organized and scalable way to manage operations. To support 
                this expansion, we proposed and developed a custom Point of Sales 
                (POS) system with integrated inventory management.
                <br /><br />
                The system was designed to streamline daily transactions, monitor 
                stock levels, track raw materials, and log employee activity across 
                multiple branches. By digitizing these processes, Divine Jewels can 
                now manage sales and inventory with greater accuracy, improve operational 
                efficiency, and make data-driven decisions for future growth.
            </p>
            </div>

            <div className="w-full pt-12">
                <div className="grid grid-cols-6 gap-4 w-full">
                    <div className="col-span-6 col-start-1 flex aspect-[6/3] rounded-lg overflow-hidden">
                        <img
                            src="/work/djpos/djpos001.jpg"
                            className="w-full h-full object-cover object-top"
                            id="asterisk asset"
                        />
                    </div>

            <div className="col-span-3 col-start-1 row-start-2 row-span-2
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/djpos/djpos007.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-4 row-start-2 row-span-2
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/djpos/djpos003.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-1 row-start-2 row-span-2
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/djpos/djpos004.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-4 row-start-4 row-span-2
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/djpos/djpos005.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-1 row-start-4 row-span-
                            aspect-[3/2]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/djpos/djpos007.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-6 col-start-1 row-start-11 row-span-4
                            aspect-[6/4]
                    flex rounded-lg overflow-hidden ">
            <div>
                <p className="font-[Instrument]
                                text-3xl 2xl:text-[2rem] lg:text-2xl 2xs:text-xl
                                overflow-y-visible text-left
                                mb-6 w-[100vw]
                    ">Explore the Figma file
                </p>

                <iframe
                    src="https://embed.figma.com/design/Nq800CNDFQMzJnFhkHWNRa/Divine-Jewels-POS?node-id=0-1&embed-host=share"
                    allowFullScreen
                    className="w-full h-full border-0"
                />
            </div>
            </div>

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
                As part of our Software Engineering course, we were tasked to approach 
                a local business, identify a real-world problem, and develop a working 
                software solution. We partnered with Divine Jewels, a small business 
                selling handmade trinkets and accessories. Their growing operations 
                had outpaced their manual methods—there was not enough structure or 
                system in place to efficiently manage sales, stock, and staff across 
                expanding branches.
                <br /><br />
                After a series of consultations, we proposed a custom Point of Sales 
                (POS) system with built-in inventory and employee management. The system 
                was developed iteratively, with constant feedback from the business 
                owner. The UI went through several rounds of revisions to align with 
                the shop’s workflow and ease of use. Once the interface was finalized, 
                we designed the database architecture and developed the frontend.
                <br /><br />
                Development was done incrementally—each subsystem (sales, inventory, 
                raw materials, employee logs) was built and tested independently before 
                integrating into the final system. This modular approach allowed us 
                to catch issues early, improve stability, and ensure each component 
                worked as intended. The result is a tailored solution that supports 
                Divine Jewels' day-to-day operations and future business growth.
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
                The UX/UI was designed in Figma, with multiple iterations based on 
                user feedback to ensure clarity and usability. QA tests were documented 
                and tracked using Google Sheets, allowing for organized issue tracking 
                and efficient debugging throughout development.


            </p>
            </div>


        </div>
            {/* <button
                    onClick={() =>
                        window.open(
                        'https://samahan.addu.edu.ph/newsfeed/',
                        '_blank'
                        )}
                    className="border border-black text-black px-16 py-4 my-4 rounded-full 
                    font-[Instrument] text-2xl
                    transition-transform duration-200 hover:scale-105 active:bg-black 
                    active:text-white" 
                    >
                    See the Website Here ❋
                </button> */}
        </div>

        </div>
    </div>

    );
};

export default Sysdev;