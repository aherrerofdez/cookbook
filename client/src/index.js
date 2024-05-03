import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM to render React components
import App from './App'; // Import the main App component
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap icons CSS

// Create a root for ReactDOM to render the main App component
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside a StrictMode for additional checks during development
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
