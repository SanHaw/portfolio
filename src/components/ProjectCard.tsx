// components/ProjectCard.tsx

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="ml-4 my-2 2xl:my-4
                    max-w-full h-32 2xl:h-40 sm:h-28
                    rounded-lg overflow-hidden 
                    bg-stone-100 shadow-xl 
                    flex flex-col sm:flex-row">
      {/* Left Image */}
        <div className="w-1/2 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>  

      {/* Right Content */}
      <div className="w-full sm:w-full align-middle pl-4 pr-4 pt-4 pb-4 flex flex-col">
        <div>
          <h2 className="font-[Instrument] font-medium 
                    text-3xl sm:text-xl
                    text-gray-900 
                    mb-4
          ">Project name</h2>
          <p className="
                  text-gray-800 
                  text-base sm:text-sm
                  mt-[-12px] 
                  leading-snug line-clamp-2
          ">
            {description}
          </p>
        </div>

        {/* Bottom Arrow Icon */}
        <div className="flex justify-end mt-6">
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
