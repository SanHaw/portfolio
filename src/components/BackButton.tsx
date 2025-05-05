// src/components/BackButton.tsx
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 z-50 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
    >
      ← Back
    </button>
  );
};

export default BackButton;
