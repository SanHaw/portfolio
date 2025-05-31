// src/components/BackButton.tsx
import { ArrowLeft } from 'lucide-react'; // optional icon, see below
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-200"
    >
      <ArrowLeft size={40} />
    </button>
  );
};

export default BackButton;
