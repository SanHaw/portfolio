
import Head from 'next/head';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GraphicDesign from './pages/GraphicDesign';
import ElysanDesign from './pages/projects/elysan';

const App = () => {
  return (
    <div className='bg-stone-100 w-full overflow-hidden max-w-full'>
      <Head>
      <></>
    </Head>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/projects/elysan" element={<ElysanDesign />} />
        {/* Define routes for other projects here */}
        {/* <Route path="/projects/projectX" element={<ProjectX />} /> */}
      </Routes>
    </Router>

      
    </div>
  );
};

export default App;
