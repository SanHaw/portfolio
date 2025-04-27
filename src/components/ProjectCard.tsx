import React from 'react';

interface ProjectCardProps {
  title: string;
  role?: string[]; // predefined roles
  imageUrl: string;
  status: string;
  otherRole?: { label: string; color: string }[]; // optional custom roles
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, role = [], imageUrl, status, otherRole = [] }) => {
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
                        mb-2
          ">{title}</h2>

          {/* Roles Section */}
          <div className="flex flex-wrap gap-2 mb-2">
            {/* Predefined Roles */}
            {role.map((r, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full text-black"
                style={{ backgroundColor: '#A3CED6' }}
              >
                {r}
              </span>
            ))}

            {/* Other Roles */}
            {otherRole.map((other, index) => (
              <span
                key={`other-${index}`}
                className="px-2 py-1 text-xs rounded-full text-black"
                style={{ backgroundColor: '#A3CED6' }}
              >
                {other.label}
              </span>
            ))}
          </div>

          {/* Status */}
          <p className="text-gray-700 text-sm">
            {status}
          </p>
        </div>

        {/* Bottom Arrow Icon (you can put something later) */}
        <div className="flex justify-end mt-6">
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;