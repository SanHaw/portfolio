import React from 'react';

interface SkillPillProps {
  icon: React.ElementType;
  label: string;
  backgroundColor: string;
}

function SkillPill({ icon: Icon, label, backgroundColor }: SkillPillProps) {
  return (
    <div className="pr-2">
      <div
        className="flex items-center whitespace-nowrap 
          text-md
          flex-wrap p-2 px-4 my-2 rounded-2xl pr-4"
        style={{ backgroundColor }}
      >
        <Icon className="mt-1 mr-2 flex-shrink-0" />
        <p className="whitespace-nowrap">{label}</p>
      </div>
    </div>
  );
}

export default SkillPill;
