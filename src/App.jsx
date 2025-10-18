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
import HomeTgs from './pages/HomeTgs';
import Opportunities from './pages/Opportunities';
import News from './pages/News';
import Mission from './pages/AboutTgs/Mission';
import Story from './pages/AboutTgs/Story';
import Board from './pages/AboutTgs/Board';
import Ambassadors from './pages/AboutTgs/Ambassadors';
import Contact from './pages/AboutTgs/Contact';

function App() {

  return (
    <Router>
      <div className='flex flex-col items-center min-h-screen'>
        <Navbar />
        <main className='w-full max-w-7xl px-4 mt-24'>
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
            <Route path="/contact" element={<Contact />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;