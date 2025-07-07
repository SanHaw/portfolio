
import Head from 'next/head';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GraphicDesign from './pages/GraphicDesign';
import PM from './pages/PM';
import AFM from './pages/projects/afm';
import BD from './pages/projects/bd';
import Chammie from './pages/projects/chammie';
import Cssec from './pages/projects/cssec';
import DJpos from './pages/projects/djpos';
import Elysan from './pages/projects/elysan';
import ITweek from './pages/projects/itweek';
import MSSC from './pages/projects/mssc';
import NWSFD from './pages/projects/nwsfd';
import Sysdev from './pages/projects/sysdev';
import TedX from './pages/projects/tedx';
import UXUI from './pages/UXUI';
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
        <Route path="/projects/cssec" element={<Cssec />} />
        <Route path="/projects/chammie" element={<Chammie />} />
        <Route path="/projects/bd" element={<BD />} />
        <Route path="/projects/tedx" element={<TedX />} />
        <Route path="/projects/nwsfd" element={<NWSFD />} />
        <Route path="/projects/afm" element={<AFM />} />
        <Route path="/projects/djpos" element={<DJpos />} />
        <Route path="/projects/mssc" element={<MSSC />} />
        <Route path="/projects/sysdev" element={<Sysdev />} />
        <Route path="/pages/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/pages/UXUI" element={<UXUI />} />
        <Route path="/pages/PM" element={<PM />} />
        <Route path="/projects/itweek" element={<ITweek />} />

        {/* Define routes for other projects here */}
        {/* <Route path="/projects/projectX" element={<ProjectX />} /> */}
      </Routes>
    </Router>

      
    </div>
  );
};

export default App;
