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
            
            <div className="justify-center justify-items-center  bg-[#FFEB81] mb-12 pt-8">
                <div className="fixed top-32 left-12 z-50 hidden sm:block">
                    <BackButton />
                </div>

                <p className="font-[Instrument] justify-center
                                text-5xl 2xl:text-[6rem] lg:text-6xl 2xs:text-2xl
                                overflow-y-visible text-center
                                bg-[#FFEB81] pt-16 pb-12 mb-6 w-[100vw]
                    ">SAMAHAN Newsfeed
                </p>
            </div>
        
            <div className="w-full text-center">
            <p className="font-[Instrument]
                            text-xl 2xl:text-3xl
                            overflow-y-visible pb-2
                ">
                2025
                <br />
                Project Manager
                
            </p>
            <p className="font-[Instrument]
                            text-base 2xl:text-xl
                                overflow-y-visible pb-8
                ">
                QA Tester | UX/UI Consultant
                
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
                The SAMAHAN NewsFeed is an annual publication led by the SAMAHAN 
                Communications, the official public affairs and information arm 
                of SAMAHAN.
                
                Over the years, the SAMAHAN NewsFeed has become more than just a 
                publication—it has evolved into a space where Ateneans see their 
                journeys reflected not as isolated experiences, but as shared 
                milestones of a tightly knit community.
                <br />
            </p>
            <p className='text-base'>
                <i>Copy taken from excerpts from the SAMAHAN Newsfeed Website</i>

            </p>
            </div>

            <div className="w-full pt-12">
            <div className="grid grid-cols-6 gap-4 w-full">
            <div className="col-span-6 col-start-1 flex aspect-[6/3] rounded-lg overflow-hidden">
            <img
                src="/work/nwsfd/smhnnwsfd002.jpg"
                className="w-full h-full object-cover object-top"
                id="asterisk asset"
            />
            </div>

            <div className="col-span-3 col-start-1 row-start-2 row-span-2
                            aspect-[6/3]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/nwsfd/smhnnwsfd002.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-4 row-start-2 row-span-2
                            aspect-[6/3]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/nwsfd/smhnnwsfd001.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-1 row-start-2 row-span-2
                            aspect-[6/3]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/nwsfd/smhnnwsfd003.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-4 row-start-4 row-span-2
                            aspect-[6/3]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/nwsfd/smhnnwsfd004.jpg"
                    className="w-full object-cover object-top"
                    id="asterisk asset"
                />
            </div>

            <div className="col-span-3 col-start-1 row-start-4 row-span-
                            aspect-[6/3]
                    flex rounded-lg overflow-hidden">
                <img
                    src="/work/nwsfd/smhnnwsfd005.jpg"
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
                            'https://samahan.addu.edu.ph/newsfeed/',
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
                This website was built as part of our ongoing initiatives —{' '}

                <a
                href="/projects/afm"
                className="text-[#4995A2] hover:underline decoration-[#4995A2] underline-offset-2"
                style={{ textDecorationThickness: "1px" }}
                >
                see <em>SAMAHAN All</em> for more here
                </a>

                . What started as a simple archive for articles evolved into a self-sustaining
                platform, after we realized the team needed to manage content independently
                with minimal dev support. Alongside my co-manager Ellyanna, I helped lead the
                project from planning to release. As the project manager, I primarily negotiated
                technicalities with clients, organized documents, and oversaw the UX/UI process —
                while also assisting with QA testing to ensure a smooth user experience.
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
                Our tech stack supports efficient collaboration across all roles. Project management 
                and documentation are handled using Google Docs and Sheets for task tracking, content 
                planning, and progress updates. For UI/UX design, we use Figma to create and iterate 
                on wireframes and mockups. The frontend is built with Next.js and TypeScript, styled 
                with CSS modules, and optimized using next/font and Vercel’s Geist font. On the backend, 
                we use TypeScript with Supabase for authentication and PostgreSQL storage, and Prisma 
                for database management.


            </p>
            </div>
        </div>
        </div>
        </div>
    </div>

    );
};

export default NWSFD;
