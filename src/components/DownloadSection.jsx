import React from 'react';
import styled from 'styled-components';

const DownloadSection = () => {
  return (
    <div className="download-button">
      <h3>This is a button that allows users to download a file from your site:</h3>
      {/* Use anchor (<a>) tag for download */}
      <a href="/assets/images/download-image.png" download="Download_image">
        <button>Download (png)</button>
      </a>
    </div>
  );
};

export default DownloadSection;
