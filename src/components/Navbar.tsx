import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import '../index.css';
import About from '../pages/About';
import Contact from '../pages/Contact';
import GraphicDesign from '../pages/GraphicDesign';
import Resume from '../pages/Resume';
import UXUI from '../pages/UXUI';

const Navbar: React.FC = () => {
  return (
    <Router>
      <div className="flex items-center justify-between bg-stone-100 text-stone-800 mb-6 p-8">
        
        <div className="flex items-center">
          <p className='font-[Nowcloud] text-4xl'>San Haw</p>
        </div>

        <nav className="flex space-x-6 font-[Roboto] text-lg">
          <Link to="/" className="">About Me</Link>
          <Link to="/graphic-design" className="">Graphic Design</Link>
          <Link to="/uxui" className="">UX/UI</Link>
          <Link to="/contact" className="">Contact</Link>
          <Link to="/resume" className="">Resume</Link>
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/uxui" element={<UXUI />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default Navbar;