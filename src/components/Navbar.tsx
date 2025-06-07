import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import '../index.css';
import Page404 from '../pages/404';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const Navbar: React.FC = () => {
  return (
    <Router>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-stone-100 text-stone-800 mb-6 px-16 py-4 pt-8 
                    position-fixed z-index-10000
      ">
        
        <div className="flex items-center">
          <p className='font-[Nowcloud] 
                        text-4xl 
          '>San Haw</p>
        </div>

        <nav className="flex space-x-6 font-[Roboto] text-lg">
          <Link to="/" className="">About Me</Link>
          <Link to="/projects" className="">Projects</Link>
          {/* <Link to="/graphic-design" className="">Graphic Design</Link>
          <Link to="/uxui" className="">UX/UI</Link> */}
          <Link to="/contact" className="">Contact</Link>
          <Link to="/resume" className="">Resume</Link>
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/graphic-design" element={<GraphicDesign />} /> */}
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/uxui" element={<UXUI />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default Navbar;