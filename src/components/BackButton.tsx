import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <button
      onClick={handleBackClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Go Back
    </button>
  );
};

export default BackButton;
