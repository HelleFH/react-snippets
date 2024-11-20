import React from 'react';
import './css/App.css';
import './css/findMatches.css'
import './css/buttons.css'
import './css/findMatchesModal.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this import at the top

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FindMatches from './pages/FindMatches';
import IndividualProfile from './pages/individualProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Add a route for the root path */}
        <Route path="/" element={<FindMatches />} /> {/* Or any other component you want to display on '/' */}
        
        {/* Define other routes */}
        <Route path="/findmatches" element={<FindMatches />} />
        <Route path="/individualProfiles/:id" element={<IndividualProfile />} />
      </Routes>
    </Router>
  );
}

export default App;


