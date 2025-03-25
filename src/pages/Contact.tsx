import React from 'react';
import ProjectCard from '../components/ProjectCard';
const Contact: React.FC = () => {
  return (
    <div className="p-6">
      <div className="w-full">
      <ProjectCard
        title="Project name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
        imageUrl="../public/work/temp.jpg" // Make sure this image exists in your public folder
      />
      </div>
    </div>
  );
};

export default Contact;
