import React from 'react';

const DownloadSection = () => {
  return (
    <div className="download-button">
      <h2>Download File</h2>
      <h3>This is a button that allows users to download a file from your site:</h3>
      {/* Use anchor (<a>) tag for download */}
      <a href="/assets/images/download-image.png" download="Download_image">
        <button>Download (png)</button>
      </a>
    </div>
  );
};

export default DownloadSection;
