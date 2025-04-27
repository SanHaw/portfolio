import {
  HoverCard,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import React from "react";
import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaPython, FaReact, FaTrello } from 'react-icons/fa';
import { SiCanva, SiShadcnui, SiTypescript } from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';



import SkillPill from '../components/SkillPill.tsx';

let skills = [
  { label: 'Front-end Development', icon: FaReact },
  { label: 'HTML', icon: FaHtml5 },
  { label: 'CSS', icon: FaCss3Alt },
  { label: 'ShadCN', icon: SiShadcnui },
  { label: 'JavaScript', icon: FaJsSquare },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'React', icon: FaReact },
  { label: 'Git', icon: FaGitAlt },
  { label: 'Github', icon: FaGithub },
  { label: 'Python', icon: FaPython },
  { label: 'Figma', icon: FaFigma },
  { label: 'Canva', icon: SiCanva },
  { label: 'Project Management', icon: FaTrello },


];

// let skills = [
//   { label: 'Project Management', icon: FaTrello },
//   { label: 'SCRUM', icon: FaTrello },
//   { label: 'AGILE', icon: FaTrello },
//   { label: 'QA Testing', icon: FaSlack },
//   { label: 'UX/UI Design', icon: FaFigma },
//   { label: 'User Research', icon: FaFigma },
//   { label: 'Front-end Development', icon: FaReact },
//   { label: 'Wireframing', icon: FaFigma },
//   { label: 'Prototyping', icon: FaFigma },
//   { label: 'User-Centered Design', icon: FaFigma },
//   { label: 'Atomic Design', icon: MdOutlineDesignServices },
//   { label: 'Component-Based Design', icon: MdOutlineDesignServices },
//   { label: 'Interaction design', icon: FaFigma },
//   { label: 'Micro-interactions', icon: FaFigma },
//   { label: 'Mobile UI design', icon: FaFigma },
//   { label: 'App design', icon: FaFigma },
//   { label: 'Webpage design', icon: FaHtml5 },
//   { label: 'HTML', icon: FaHtml5 },
//   { label: 'CSS', icon: FaCss3Alt },
//   { label: 'ShadCN', icon: SiShadcnui },
//   { label: 'Git', icon: FaGitAlt },
//   { label: 'Github', icon: FaGithub },
//   { label: 'Excel', icon: AiFillFileExcel },
//   { label: 'Google Suite', icon: BsGoogle },
//   { label: 'Trello', icon: FaTrello },
//   { label: 'Slack', icon: FaSlack },
//   { label: 'Notion', icon: SiNotion },
//   { label: 'ClickUp', icon: SiClickup },
//   { label: 'Figma', icon: FaFigma },
//   { label: 'Responsive Design', icon: FaFigma },
//   { label: 'Canva', icon: SiCanva },
//   { label: 'MySQL', icon: SiMysql },
//   { label: 'Branding Design', icon: MdOutlineDesignServices },
//   { label: 'Identity Design', icon: MdOutlineDesignServices },
//   { label: 'Graphic Design', icon: MdOutlineDesignServices },
//   { label: 'Information Design', icon: MdOutlineDesignServices },
//   { label: 'JavaScript', icon: FaJsSquare },
//   { label: 'TypeScript', icon: SiTypescript },
//   { label: 'React', icon: FaReact },
//   { label: 'Python', icon: FaPython },
// ];

let colors = ['#FFEB81', '#E8D0FF', '#A3CED6', '#6EAA87'];

const About: React.FC = () => {
  return (
      <div id="whole page" className="min-h-screen sm:w-full
                                      flex pt-0 p-8 
                                      text-stone-800 justify-center overflow-x-hidden">
        <div id="whole page" className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full 
                                      flex flex-col justify-center items-center 
                                      pt-0 p-8">

          <div className="grid grid-cols-6 gap-0 w-full">
            <div className=" col-start-4 col-span-3 flex">
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
                     {/* ---------------------------------------------------------------------- */}

          <div className="grid grid-cols-[5fr_1fr] w-full">
            <div className="flex items-center justify-left">
              <span className="py-0">
                <p className="font-[Instrument] text-5xl 2xl:7xl">Hi there, I'm</p>
                <p className=" font-[Nowcloud] text-9xl 2xl:text-[10rem] ">Sarah</p>
                <p className="font-[Instrument] text-3xl 2xl:5xl">UI/UX Designer | Graphic Designer | Computer Science</p>
                <div className="py-4 text-stone-700 inline-block flex-wrap">
                  <div className="flex w-[100%] flex-wrap">
                    {skills.map((skill, index) => {
                      let randomColor = colors[Math.floor(Math.random() * colors.length)];
                      return (
                        <SkillPill
                          key={index}
                          icon={skill.icon}
                          label={skill.label}
                          backgroundColor={randomColor}
                        />
                      );
                    })}
                  </div>
                </div>
              </span>
            </div>

            </div>

           {/* ---------------------------------------------------------------------- */}

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-6 flex">
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                    flex items-center justify-center overflow-hidden"></div>
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                  flex items-center justify-center overflow-hidden"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
                <div className="w-full 
                                rounded-lg bg-[transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/asterisk2.svg"
                      alt="Asterisk"
                      className="w-max h-max object-contain"
                      id="asterisk asset"
                    />
                </div>
                <div className="w-full 
                                rounded-lg h-full bg-transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/smiski4.png"
                      alt=""
                      className="h-full object-contain"
                      id="asterisk asset"
                    />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-3 flex">
                
                <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-1">
                <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                    flex items-center justify-center overflow-hidden"></div>
                <div className="w-full 
                                rounded-lg bg-[transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/shocked.svg"
                      alt="Quotation Marks"
                      className="w-max h-max object-contain"
                      id="asterisk asset"
                    />
                </div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-transparent aspect-square"></div>
                
              </div>
              <div className=" col-start-2 col-span-1">
              
              <div className="w-full rounded-lg bg-[transparent aspect-square text-center 
                  flex items-center justify-center overflow-hidden">
                  <img
                    src="/asterisk.svg"
                    alt="Asterisk"
                    className="w-max h-max object-contain"
                  />
              </div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
              <div className="w-full rounded-lg bg-[transparent aspect-square text-center 
                flex items-center justify-center overflow-hidden">
                <img
                  src="/quote.svg"
                  alt=""
                  className="w-max h-max object-contain"
                />
              </div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
                
              </div>

              <div className=" col-start-3 col-span-4">
                <div>
                  <div>
                  <div id="latest projects section" className=" 2xl:scale-{1.5}">
                    <div className="pl-16 2xl:pl-12 w-full">
                      <span className="">
                        <h1 className=" font-[Nowcloud] text-right text-5xl 2xl:text-7xl">Projects</h1>
                        <h1 className=" font-[Nowcloud] mt-[-10px] text-right text-7xl 2xl:text-9xl" >Lately</h1>
                      </span>
                      <div className="flex justify-end justify-items-end 2xl:mt-2">
                        <div className="w-full flex flex-col justify-between h-full">
                        <ProjectCard 
                          title="Project Beta"
                          role={["QA Testing"]}
                          otherRole={[
                            { label: "SEO Specialist", color: "#4ADE80" }, // custom role
                            { label: "DevOps", color: "#60A5FA" }
                          ]}
                          imageUrl="/img/project2.png"
                          status="Ongoing"
                      />
                      <ProjectCard 
                        title="Project Beta"
                        role={["QA Testing"]}
                        otherRole={[
                          { label: "SEO Specialist", color: "#4ADE80" }, // custom role
                          { label: "DevOps", color: "#60A5FA" }
                        ]}
                        imageUrl="/img/project2.png"
                        status="Ongoing"
                      />
                      <ProjectCard 
                        title="Project Beta"
                        role={["QA Testing"]}
                        otherRole={[
                          { label: "SEO Specialist", color: "#4ADE80" }, // custom role
                          { label: "DevOps", color: "#60A5FA" }
                        ]}
                        imageUrl="/img/project2.png"
                        status="Ongoing"
                      />
                      
                          <div className="flex justify-end pr-3">
                            <HoverCard>
                              <HoverCardTrigger>
                                <button className="hover:underline 
                                                  text-stone-800 font-[Instrument] 
                                                  text-xl 2xl:text-3xl
                                                  2xl:mt-1
                                                
    >
                                ">See more</button>
                              </HoverCardTrigger>
                            </HoverCard>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div>
                </div>  
              </div>
            </div>








            {/* ---------------------------------------------------------------------- */}

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-7 flex">
                <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full 
                                rounded-lg h-full bg-transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/flower.svg"
                      alt=""
                      className="h-full object-contain"
                      id="asterisk asset"
                    />
                </div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-7 flex">
                <div className="w-full 
                                rounded-lg h-full bg-transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/smiski3.png"
                      alt=""
                      className="h-full object-contain"
                      id="asterisk asset"
                    />
                </div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-7 flex">
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              </div>
            </div>

                     {/* ---------------------------------------------------------------------- */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
            {/* Image Placeholder */}
            <div className="md:col-span-1">
              <div className="h-full bg-gray-300 rounded-lg w-full aspect-[2/3] " />
            </div>

            {/* Text Content */}
            <div className="md:col-span-2">
              <h1 className="text-stone-800 
                            leading-[0.8]
                            font-[NowCloud]
                            text-6xl">
                SARAH<br />HAW
              </h1>

              <p className="mt-2 leading-relaxed 
                          text-stone-800 
                            text-lg md:text-base
                            2xl:w-[30vw]
              ">
                Hi, I'm Sarah („• ᴗ •„)♡ An artist and designer from Davao City, Philippines.
                ･ʚ˚✧˖ With a background in graphic design, ux/ui design, front-end development,
                project management, social media marketing, and customer service. (*´∇｀*)♡
                I actively participate in organizations within and outside of school and have
                led numerous projects since entering college. ⋆✺⋆｡
                <br /><br />
                When I'm not rushing off to the next project, I'm collecting smiskis, reading, 
                playing games, watching movies, and--my favorite-- writing in my burn book 
                (scrapbooking in my journal).
              </p>
            </div>

          </div>
                     {/* ---------------------------------------------------------------------- */}

          <div className="grid grid-cols-2 gap-0">
            <div></div>
            <div className="col-start-2">
              <div className="grid grid-cols-3 gap-0">
                <div className="col-start-2 w-full rounded-lg bg-[transparent aspect-square text-center
                  flex items-center justify-center overflow-hidden">
                    <img
                      src="/asterisk.svg"
                      alt="Asterisk"
                      className="w-max h-max object-contain"
                      id="asterisk asset"
                    />
                
                </div>
              </div>
              <div className="grid grid-cols-3 gap-0">
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full 
                                rounded-lg h-full bg-transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/smiski6.png"
                      alt=""
                      className="h-full object-contain"
                      id="asterisk asset"
                    />
                </div>
              </div>
            </div>
          </div>

                     {/* ---------------------------------------------------------------------- */}

          
        </div>
      </div>
  );
};

export default About;
