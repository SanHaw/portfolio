import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onCardClick?: () => void;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onCardClick, link }) => {
  const handleClick = (event: React.MouseEvent) => {
    if (onCardClick) {
      event.preventDefault();
      onCardClick(); // Call the click handler passed as a prop
    }
    window.location.href = link; // Redirect to the link after the click logic
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md bg-white
            w-[100%]
            cursor-pointer transform transition-all duration-300 
            ease-in-out hover:scale-105 active:bg-stone-200 hover:shadow-lg"
      onClick={handleClick}
      style={{ height: '260px' }}
    >
      {/* Image */}
      <div className="h-40 overflow-hidden" style={{ height: '60%' }}>
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
      </div>

      {/* Text */}
      <div className="px-4 py-4 mt-2" style={{ height:'40%' }}>
        <div className="font-[Instrument] text-xl sm:text-2xl mb-2">{title}</div>
        <p className="text-stone-800 line-clamp-2 text-base sm:text-sm leading-[1] mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;


// import React from 'react';
// import { Link } from 'react-router-dom';

// interface CardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   onCardClick?: () => void;
//   link: string;
// }

// const Card: React.FC<CardProps> = ({ title, description, imageUrl, onCardClick, link }) => {
//   const handleClick = (event: React.MouseEvent) => {
//     if (onCardClick) {
//       event.preventDefault();
//       onCardClick();
//     }
//   };

//   return (
//     <Link
//   to={link}
//   className="rounded-lg overflow-hidden shadow-md bg-white
//             w-[100%]
//             cursor-pointer transform transition-all duration-300 
//             ease-in-out hover:scale-105 active:bg-stone-200 hover:shadow-lg"
//   onClick={handleClick}
//   style={{ height: '260px' }}
// >
//   {/* Image */}
//   <div className="h-40 overflow-hidden" style={{ height: '60%' }}>
//     <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
//   </div>

//   {/* Text */}
//   <div className="px-4 py-4 mt-2" style={{ height:'40%' }}>
//     <div className="font-[Instrument] text-xl sm:text-2xl mb-2">{title}</div>
//     <p className="text-stone-800 line-clamp-2 text-base sm:text-sm leading-[1] mb-4">
//       {description}
//     </p>
//   </div>
// </Link>

//   );
// };

// export default Card;
