import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md bg-white 
                        w-70 md:w-80
        ">
          {/* Image */}
          <div className="h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={title}
            />
          </div>
    
          {/* Text */}
          <div className="px-4 py-4 mt-">
            <div className="font-[Instrument] text-xl sm:text-2xl mb-2">
              {title}
            </div>
            <p className="text-stone-800 line-clamp-2
                        text-base mb:text-sm 
                        leading-[1]
            ">
              {description}
            </p>
          </div>

        </div>
      );
//   return (
//     <div className="max-w-80 rounded-lg overflow-hidden shadow-md bg-white">
//         <span>
//             <div className="h-40 overflow-hidden">
//                 <img className="w-full h-auto object-cover" 
//                 src={imageUrl} alt={title} />
//             </div>
//             <div className="px-4 py-4 bg-white">
//                 <div className="font-[Instrument]
//                                 text-xl sm:text-3xl
//                                 mb-2
//                 ">{title}</div>
//                 <p className="text-stone-800
//                                 text-base">
//                 {description}
//                 </p>
//             </div>
//         </span>
//     </div>
//   );
};

export default Card;
