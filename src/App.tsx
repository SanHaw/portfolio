
import Head from 'next/head';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GraphicDesign from './pages/GraphicDesign';
import BD from './pages/projects/bd';
import Elysan from './pages/projects/elysan';
import TedX from './pages/projects/tedx';

const App = () => {
  return (
    <div className='bg-stone-100 w-full overflow-hidden max-w-full '>
      <Head>
      <></>
    </Head>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/projects/elysan" element={<Elysan />} />
        <Route path="/projects/tedx" element={<TedX />} />
        <Route path="/projects/bd" element={<BD />} />
        {/* Define routes for other projects here */}
        {/* <Route path="/projects/projectX" element={<ProjectX />} /> */}
      </Routes>
    </Router>

      
    </div>
  );
};

export default App;
