import React from "react";

const Projects: React.FC = () => {
  const cardData = [
    {
      title: "UX/UI Designer",
      img1: "computer101.png",
      img2: "computer001.png",
      path: "/pages/UXUI",
    },
    {
      title: "Graphic Designer",
      img1: "computer102.png",
      img2: "computer002.png",
      path: "/pages/GraphicDesign",
    },
    // {
    //   title: "Project Manager",
    //   img1: "computer103.png",
    //   img2: "computer003.png",
    //   path: "/pages/PM",
    // },
  ];

  const handleCardClick = (title: string, path: string) => {
    console.log(`${title} clicked!`);
    window.location.href = path; // Use this to ensure navigation always works
  };

  return (
    <div className="min-h-screen sm:w-full flex pt-0 p-8 text-stone-800 justify-center overflow-x-hidden">
      <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full flex flex-col justify-center items-center pt-0 p-8 mt-24">
        
        {/* Decorative Top Grid */}
        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-4 col-span-3 flex">
            <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden">
              <img src="/asterisk.svg" alt="Asterisk" className="w-max h-max object-contain" />
            </div>
          </div>
        </div>

        {/* Resume Title */}
        <div className="grid grid-cols-[5fr_1fr] w-full">
          <div className="flex items-center justify-left">
            <span className="py-0">
              <p className="py-12 font-[Nowcloud] text-4xl 2xl:text-[8rem] lg:text-6xl 2xs:text:xl">Projects</p>
            </span>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-2 col-span-4 flex flex-col sm:flex-row justify-center gap-8 p-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(card.title, card.path)}
                className="flex flex-col items-center group cursor-pointer w-[300px]"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={card.img1}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={card.img2}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <p className="mt-4 font-[Instrument] text-4xl text-center text-black group-hover:text-[#4995A2] transition-colors duration-300">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Grids */}
        <div className="grid grid-cols-6 gap-0 w-full pt-8">
          <div className="col-start-1 col-span-6 flex">
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden"></div>
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden">
              <img src="/asterisk2.svg" alt="Asterisk" className="w-max h-max object-contain" />
            </div>
            <div className="w-full rounded-lg h-full bg-transparent aspect-square text-center flex items-center justify-center overflow-hidden">
              <img src="/smiski4.png" alt="" className="h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-1 col-span-3 flex">
            <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;




// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Projects: React.FC = () => {
//   const navigate = useNavigate();

//   const cardData = [
//     {
//       title: "UX/UI Designer",
//       img1: "computer101.png",
//       img2: "computer001.png",
//       path: "/pages/UXUI",
//     },
//     {
//       title: "Graphic Designer",
//       img1: "computer102.png",
//       img2: "computer002.png",
//       path: "/pages/GraphicDesign",
//     },
//     {
//       title: "Project Manager",
//       img1: "computer103.png",
//       img2: "computer003.png",
//       path: "/pages/PM",
//     },
//   ];

//   return (
//     <div className="min-h-screen sm:w-full flex pt-0 p-8 text-stone-800 justify-center overflow-x-hidden">
//       <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full flex flex-col justify-center items-center pt-0 p-8 mt-24">
        
//         {/* Decorative Top Grid */}
//         <div className="grid grid-cols-6 gap-0 w-full">
//           <div className="col-start-4 col-span-3 flex">
//             <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
//             <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
//             <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden">
//               <img src="/asterisk.svg" alt="Asterisk" className="w-max h-max object-contain" />
//             </div>
//           </div>
//         </div>

//         {/* Resume Title */}
//         <div className="grid grid-cols-[5fr_1fr] w-full">
//           <div className="flex items-center justify-left">
//             <span className="py-0">
//               <p className="font-[Nowcloud] text-4xl 2xl:text-[8rem] lg:text-6xl 2xs:text:xl">Resume</p>
//             </span>
//           </div>
//         </div>

//         {/* Project Cards */}
//         <div className="grid grid-cols-6 gap-0 w-full">
//           <div className="col-start-2 col-span-4 flex flex-col sm:flex-row justify-center gap-8 p-8">
//             {cardData.map((card, index) => (
//               <div
//                 key={index}
//                 onClick={() => navigate(card.path)}
//                 className="flex flex-col items-center group cursor-pointer w-[300px]"
//               >
//                 <div className="relative w-full aspect-square overflow-hidden">
//                   <img
//                     src={card.img1}
//                     className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
//                   />
//                   <img
//                     src={card.img2}
//                     className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                   />
//                 </div>
//                 <p className="mt-4 font-[Instrument] text-4xl text-center text-black group-hover:text-[#4995A2] transition-colors duration-300">
//                   {card.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Decorative Bottom Grid */}
//         <div className="grid grid-cols-6 gap-0 w-full">
//           <div className="col-start-1 col-span-6 flex">
//             <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden"></div>
//             <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden"></div>
//             <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
//             <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
//             <div className="w-full rounded-lg bg-[transparent aspect-square text-center flex items-center justify-center overflow-hidden">
//               <img src="/asterisk2.svg" alt="Asterisk" className="w-max h-max object-contain" />
//             </div>
//             <div className="w-full rounded-lg h-full bg-transparent aspect-square text-center flex items-center justify-center overflow-hidden">
//               <img src="/smiski4.png" alt="" className="h-full object-contain" />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-6 gap-0 w-full">
//           <div className="col-start-1 col-span-3 flex">
//             <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
//             <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
//             <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
