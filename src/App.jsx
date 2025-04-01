
import React from 'react';
import Navbar from './components/Navbar';
import Photos from './components/Gallery';
import ColorChooser from './components/ColorChange';
import TestimonialCarousel from './components/slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SwipeCards from './components/SwipeCards';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './css/styles.scss';  


const App = () => {
  
  return (

    
    <div>
            <Navbar />

          <div className="app-container">

      <SwipeCards />
      <ColorChooser />

      <Photos />
      <div className='content-container'>
      <DownloadSection />
      <TestimonialCarousel/>
      </div>
    </div>
    <Footer />

    </div>
    
  );
};

export default App;
