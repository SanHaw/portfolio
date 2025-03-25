// components/ProjectCard.tsx

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-xl h-40 w-[40vw] rounded-lg overflow-hidden shadow-lg bg-white flex flex-col sm:flex-row transition hover:shadow-xl">
      {/* Left Image */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-[Instrument] font-medium text-gray-900 mb-4">Project name</h2>
          <p className="text-gray-800 text-lg leading-snug">
            {description}
          </p>
        </div>

        {/* Bottom Arrow Icon */}
        <div className="flex justify-end mt-6">
          <div className="">
            
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-zinc-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 7H7m10 0v10m0-10L7 17" />
              </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
