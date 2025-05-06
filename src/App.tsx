
import Head from 'next/head';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GraphicDesign from './pages/GraphicDesign';
import BD from './pages/projects/bd';
import DJpos from './pages/projects/djpos';
import Elysan from './pages/projects/elysan';
import MSSC from './pages/projects/mssc';
import SMHNafm from './pages/projects/smhnafm';
import SMHNnwsfd from './pages/projects/smhnwsfd';
import Sysdev from './pages/projects/sysdev';
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
        <Route path="/projects/blockdiary" element={<BD />} />
        <Route path="/projects/tedx" element={<TedX />} />
        <Route path="/projects/newsfeed" element={<SMHNnwsfd />} />
        <Route path="/projects/allformore" element={<SMHNafm />} />
        <Route path="/projects/divinejewel" element={<DJpos />} />
        <Route path="/projects/misscon" element={<MSSC />} />
        <Route path="/projects/sysdev" element={<Sysdev />} />
        {/* Define routes for other projects here */}
        {/* <Route path="/projects/projectX" element={<ProjectX />} /> */}
      </Routes>
    </Router>

      
    </div>
  );
};

export default App;
