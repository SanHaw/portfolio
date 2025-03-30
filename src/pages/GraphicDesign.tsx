import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Card from '../components/Card.tsx';

const GraphicDesign: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Use the navigate function in handleCardClick to navigate to the link
  const handleCardClick = (link: string) => {
    navigate(link); // Navigate to the path specified in the link
  };

  return (
    <div id="whole page" className="min-h-screen flex pt-0 p-8 text-stone-800 justify-center align-top overflow-x-hidden">
      <div id="whole page" className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full flex flex-col justify-start align-middle items-center pt-0 p-8">
        {/* ... your other sections ... */}

        <div className="mt-10 flex flex-wrap justify-center items-start h-auto w-full gap-4">
          <Card
            title="Elysan Design Studio"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/elysan" // Path to navigate to
          />
          <Card
            title="TEDxLanang Ave"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/tedx" // Path to navigate to
          />
          <Card
            title="CSSEC 2023-2024"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/cssec" // Path to navigate to
          />
          <Card
            title="Chammie Carnival"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/chammie" // Path to navigate to
          />
          <Card
            title="Mooncake Festival 2024"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/mooncake" // Path to navigate to
          />
          <Card
            title="Purple Up: Kick-Off 2023"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/purpleup" // Path to navigate to
          />
          <Card
            title="IT Week 2024"
            description="This is a description for the card. It will be truncated if it's too long."
            imageUrl="public/work/temp.jpg"
            onCardClick={handleCardClick}
            link="/projects/itweek" // Path to navigate to
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
