import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';

// This is the new API for React 18:
const root = ReactDOM.createRoot(document.getElementById('root'));

// Instead of ReactDOM.render, use createRoot and render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
