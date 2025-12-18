import React from 'react';
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from './components/tgs/NavBar';

// Pages
import HomeTgs from './pages/tgs/hometgs/HomeTgs';
import Opportunities from './pages/tgs/Opportunities';
import News from './pages/tgs/News';
import Mission from './pages/tgs/AboutTgs/Mission';
import Story from './pages/tgs/AboutTgs/Story';
import Board from './pages/tgs/AboutTgs/Board';
import Ambassadors from './pages/tgs/AboutTgs/Ambassadors';
import Footer from './components/tgs/Footer';

function App() {

  return (
    <Router>
      <div className='flex flex-col items-center min-h-screen'>
        <Navbar />
        <main className='w-full'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeTgs />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/news" element={<News />} />

            {/* About & subpages */}
            <Route path="/about" element={<Navigate to="/our_mission" replace />} />
            <Route path="/our_mission" element={<Mission />} />
            <Route path="/our_story" element={<Story />} />
            <Route path="/our_team" element={<Navigate to="/board" replace />} />
            <Route path="/board" element={<Board />} />
            <Route path="/ambassadors" element={<Ambassadors />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <div className='px-6 py-8'>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App;