import React from 'react';
import styled from 'styled-components';

const DownloadSection = () => {
  return (
    <div className='download-button'>
        <h3>This is a button that allows users to download a file from your site:</h3>
      <button href="/images/Helle-Fruergaard-Resume.pdf" download="Helle_Fruergaard_Resume">
        Download Resume (pdf)
      </button>
    </div>
  );
};


export default DownloadSection;