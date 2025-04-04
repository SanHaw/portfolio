import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onCardClick: () => void;  // Added onCardClick prop to handle the click
  link: string;  // Added link prop to define where the card should navigate
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onCardClick, link }) => {
  return (
    <a
      href={link} // Make the card clickable and navigate to the link
      rel="noopener noreferrer"
      className="rounded-lg overflow-hidden shadow-md bg-white 
                w-90 2xl:w-120 xl:w-100 lg:w-80 md:w-75 sm:w-70 xs:w-80
                cursor-pointer transform transition-all duration-300 
                ease-in-out hover:scale-105 active:bg-stone-200 hover:shadow-lg"
      onClick={onCardClick} // Handle the card click action
    >
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
      </div>

      {/* Text */}
      <div className="px-4 py-4 mt-2">
        <div className="font-[Instrument] text-xl sm:text-2xl mb-2">{title}</div>
        <p className="text-stone-800 line-clamp-2 text-base sm:text-sm leading-[1] mb-4">
          {description}
        </p>
      </div>
    </a>
  );
};

export default Card;
