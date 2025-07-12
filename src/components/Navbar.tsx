import React from 'react';
import { Link } from 'react-router-dom'; // ✅ still use Link

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-stone-100 text-stone-800 mb-6 px-16 py-4 pt-8">
      <div className="flex items-center">
        <Link to="/" className="text-4xl font-[Nowcloud]">
          San Haw
        </Link>
      </div>

      <nav className="flex space-x-6 font-[Roboto] text-lg">
        <Link to="/" className="">About Me</Link>
        <Link to="/projects" className="">Projects</Link>
        <Link to="/contact" className="">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
