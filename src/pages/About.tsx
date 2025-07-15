import React from "react";
import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaPython, FaReact, FaTrello } from 'react-icons/fa';
import { SiCanva, SiShadcnui, SiTypescript } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import SkillPill from '../components/SkillPill.tsx';
// FontAwesome
import {
  FaDraftingCompass,
  FaRegObjectGroup,
  FaSearch
} from 'react-icons/fa';



let skills = [
  { label: 'User Research', icon: FaSearch },
{ label: 'User Interface Design', icon: FaFigma },
{ label: 'Wireframing', icon: FaRegObjectGroup },
{ label: 'Prototyping', icon: FaDraftingCompass },
{ label: 'Figma', icon: FaFigma },
{ label: 'Canva', icon: SiCanva },
{ label: 'ShadCN', icon: SiShadcnui },
{ label: 'Front-end Development', icon: FaReact },
{ label: 'React', icon: FaReact },
{ label: 'HTML', icon: FaHtml5 },
{ label: 'CSS', icon: FaCss3Alt },
{ label: 'JavaScript', icon: FaJsSquare },
{ label: 'TypeScript', icon: SiTypescript },
{ label: 'Python', icon: FaPython },

{ label: 'Project Management', icon: FaTrello },
{ label: 'Git', icon: FaGitAlt },
{ label: 'Github', icon: FaGithub },


];

const About: React.FC = () => {

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
    {
      title: 'SAMAHAN Newsfeed',
      description: 'PROJECT MANAGER',
      imageUrl: '/work/nwsfd/nwsfd000.jpg',
      link: '/projects/nwsfd',
      onCardClick: () => handleCardClick('NWSFD'),
    }, 
    {
      title: 'CS Student Executive Council',
      description: 'Creatives Head',
      imageUrl: '/work/cssec/cssec000.jpg',
      link: '/projects/cssec',
      onCardClick: () => handleCardClick('CSSEC'),
    },
  
  ];

let colors = ['#FFEB81', '#E8D0FF', '#A3CED6', '#6EAA87'];

  return (
      <div id="whole page" className="min-h-screen sm:w-full
                                      flex pt-0 p-8 
                                      text-stone-800 justify-center overflow-x-hidden">
        <div id="whole page" className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full 
                                      flex flex-col justify-center items-center 
                                      pt-0 p-8 mt-24">

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
                <p className="font-[Instrument] text-6xl 2xl:7xl">Hi there, I'm</p>
                <p className=" font-[Nowcloud] text-9xl 2xl:text-[10rem] ">Sarah</p>
                <p className="font-[Instrument] text-4xl 2xl:5xl">UI/UX Designer | Graphic Designer | Computer Science</p>
                <div className="py-4 text-stone-700 inline-block flex-wrap">
                  <div className="flex w-[100%] flex-wrap my-4">
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
                      src="/arrow1.svg"
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
                
                <div className="w-full 
                                rounded-lg bg-[transparent aspect-square text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/smiski2.png"
                      className="w-max h-max object-contain"
                      id="asterisk asset"
                    />
                </div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
                <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
              </div>
            </div>

            {/* ------------------------------------------------------------------------ */}

{/* Recent Projects */}

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
                  <div id="latest projects section" className=" 2xl:scale-{1.5} pt-16">
                    <div className="pl-16 2xl:pl-12 w-full">
                      <span className="mb-8">
                        <h1 className=" font-[Nowcloud] text-right text-5xl 2xl:text-7xl">Projects</h1>
                        <h1 className=" font-[Nowcloud] mt-[-10px] text-right text-7xl 2xl:text-9xl" >Lately</h1>
                      </span>
                      <div className="flex justify-end justify-items-end 2xl:mt-2">
                        <div className="w-full flex flex-col justify-between h-full space-y-4">
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
                          <Link
                            to="/Projects"
                            className="text-[#4995A2] hover:underline text-lg font-medium text-right"
                          >
                            See More →
                          </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div>
              </div>
            </div>

            {/* ---------------------------------------------------------------------- */}

            <div className="grid grid-cols-6 gap-0 w-full">
              <div className=" col-start-1 col-span-7 flex">
                <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
                <div className="w-full rounded-lg bg-transparent aspect-square"></div>
                <div className="w-full rounded-lg bg-transparent aspect-square"></div>
                <div className="w-full rounded-lg bg-transparent aspect-square"></div>
                <div className="w-full 
                                rounded-lg h-full bg-transparent aspect-[2/1] text-center
                                flex items-center justify-center overflow-hidden">
                    <img
                      src="/shape04.svg"
                      
                      className="h-full object-contain"
                      
                    />
                </div>
                <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
              </div>
            </div>

            {/* <div className="grid grid-cols-6 gap-0 w-full ">
              <div className=" col-start-1 col-span-7 flex">
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              <div className="w-full rounded-lg bg-transparent aspect-square"></div>
              </div>
            </div> */}

                     {/* ---------------------------------------------------------------------- */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center my-16">
            {/* <div className="grid col-span-2 grid-cols-1 sm:grid-cols-2 gap-6 
            auto-rows-fr items-stretch mt-10">
            
          </div> */}
            
            <div className="md:col-span-1">
              <div className="h-full bg-gray-300 rounded-2xl w-full aspect-[2/3] overflow-hidden">
                <img
                  src="/me.jpg"
                  alt="Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-2">
              <h1 className="text-stone-800 
                            leading-[0.8]
                            font-[NowCloud]
                            text-7xl">
                SARAH<br />HAW
              </h1>

              <p className="mt-12 leading-relaxed 
                          text-stone-800 
                            text-xl md:text-lg
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
          

                     {/* ---------------------------------------------------------------------- */}

          
        </div>
        </div></div>
    
  );
};

export default About;
