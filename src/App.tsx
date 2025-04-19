import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Company from './pages/Company';
import Jobs from './pages/Jobs';
import HR from './pages/HR';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/hr" element={<HR />} />
      </Routes>
    </Router>
  );
}

export default App;