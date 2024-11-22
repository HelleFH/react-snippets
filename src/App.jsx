
import React from 'react';
import Navbar from './components/Navbar';
import Photos from './components/Gallery';
import ColorChooser from './components/ColorChange';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SwipeCards from './components/SwipeCards';
import DownloadSection from './components/DownloadSection';
import './css/styles.scss';  // Import the main SCSS file (this will include all partials)


const App = () => {
  
  return (

    
    <div>
            <Navbar />

          <div className="app-container">

      <SwipeCards />

      <Photos />
      <DownloadSection />
      <ColorChooser />
    
    </div>
    </div>
  );
};

export default App;