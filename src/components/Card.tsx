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
      onCardClick();
    }
    window.location.href = link;
  };

  return (
    <div
      className="flex flex-col sm:flex-row w-full max-w-4xl rounded-lg 
        overflow-hidden shadow-md bg-white cursor-pointer transition-transform 
        duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:bg-stone-200"
      onClick={handleClick}
    >
      {/* Image section: keeps 3:2 width:height ratio */}
      <div className="w-full sm:w-1/3 aspect-[3/2] ">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Text section */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <div className="font-[Instrument] text-3xl sm:text-3xl mb-2">{title}</div>
        <p className="text-stone-800 text-sm sm:text-base line-clamp-2 leading-snug">
          {description}
        </p>
      </div>

    </div>
  );
};

export default Card;
