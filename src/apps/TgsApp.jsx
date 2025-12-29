import React from 'react';
// import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from '../components/tgs/NavBar';

// Pages
import HomeTgs from '../pages/tgs/hometgs/HomeTgs';
// import Opportunities from '../components/opportunities/HeroSection';
import News from '../pages/tgs/News';
import Mission from '../pages/tgs/AboutTgs/Mission';
import Story from '../pages/tgs/AboutTgs/Story';
import Board from '../pages/tgs/AboutTgs/Board';
import Ambassadors from '../pages/tgs/AboutTgs/Ambassadors';
import Footer from '../components/tgs/Footer';
import Contact from '../pages/tgs/AboutTgs/Contact';
import ArticleDetail from '../components/tgs/news/Pages/ArticleDetail';
import { ScrollToTop } from '../ScrollToTop';

function LayoutTop({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  )
}

function TgsApp() {
  return (
    <Router>
      <div className='flex flex-col items-center min-h-screen'>
        <Navbar />
        <main className='w-full'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeTgs />} />
            <Route path="/news" element={<LayoutTop><News /></LayoutTop>} />
            <Route path="/news/:id" element={<LayoutTop><ArticleDetail /></LayoutTop>} />

            {/* About & subpages */}
            <Route path="/about" element={<Navigate to="/our_mission" replace />} />
            <Route path="/our_mission" element={<LayoutTop><Mission /></LayoutTop>} />
            <Route path="/our_story" element={<LayoutTop><Story /></LayoutTop>} />
            <Route path="/our_team" element={<Navigate to="/board" replace />} />
            <Route path="/board" element={<LayoutTop><Board /></LayoutTop>} />
            <Route path="/ambassadors" element={<LayoutTop><Ambassadors /></LayoutTop>} />
            <Route path="/contact" element={<LayoutTop><Contact /></LayoutTop>} />

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

export default TgsApp;