import React from 'react';
import Card from '../components/Card.tsx'; // Make sure the path is correct

const GraphicDesign: React.FC = () => {
  // You can uncomment this if you're using a navigation library like React Router.
  // const navigate = useNavigate(); 
  
  // Define the handleCardClick function if you need any actions when a card is clicked.
  // const handleCardClick = (link: string) => {
  //   navigate(link); // Navigate to the path specified in the link
  // };

  const cards = [
    {
      title: 'Logo Design Project',
      description: 'A clean, modern logo design for a tech startup.',
      imageUrl: 'https://via.placeholder.com/150',
      onCardClick: () => console.log("Logo Design Clicked"),
      link: 'https://www.example.com/project1'
    },
    {
      title: 'Website Layout',
      description: 'A website layout design for an e-commerce platform.',
      imageUrl: 'https://via.placeholder.com/150',
      onCardClick: () => console.log("Website Layout Clicked"),
      link: 'https://www.example.com/project2'
    },
    {
      title: 'Poster Design',
      description: 'A vibrant poster design for a concert event.',
      imageUrl: 'https://via.placeholder.com/150',
      onCardClick: () => console.log("Poster Design Clicked"),
      link: 'https://www.example.com/project3'
    },
    {
      title: 'Branding Design',
      description: 'Complete branding design for a new coffee shop.',
      imageUrl: 'https://via.placeholder.com/150',
      onCardClick: () => console.log("Branding Design Clicked"),
      link: 'https://www.example.com/project4'
    }
  ];

  return (
    <div id="whole page" className="min-h-screen 
                                    flex pt-0 px-20 text-stone-800 
                                    justify-center align-top 
                                    max-w-full overflow-x-hidden">
      <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full 
                                      flex flex-col justify-start align-middle items-center 
                                      pt-0 p-8">
        
        <div id="first row of squares" className="grid grid-cols-2 gap-0">
          <div></div>
          <div className="col-start-2">
            <div className="grid grid-cols-3 gap-0">
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
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-[5fr_1fr] w-full">
          <div className="flex items-center justify-left">
            <span className="py-0">
              <p className="font-[Instrument] 
                            text-3xl 2xl:7xl">Hi there, I do</p>
              <p className="font-[Nowcloud] 
                            text-6xl 2xl:text-[10rem] lg:text-9xl 2xs:text:2xl">Graphic Design</p>
            </span>
          </div>
          
          <div className="flex items-center justify-end w-auto">
            <div className="flex flex-col gap-y-0 w-full">
              <div className="w-full aspect-square bg-[#6EAA87] rounded-md"></div>
              <div className="w-full aspect-square bg-[#A3CED6] rounded-md"></div>
              <div className="w-full aspect-square bg-[#FFEB81] rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-3 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 space-x-5 space-y-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              onCardClick={card.onCardClick}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
