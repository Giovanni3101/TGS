import React from 'react';
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Navbar from './components/TGS/NavBar';

function App() {

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100'>
      <Navbar />
      <Router>
        <Routes>
          {/* <Route path="/" element={< />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
