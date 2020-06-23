import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // React.StrictMode is a React Defined component 
  // StrictMode is for testing. It's a tool for highlighting
    // potential problems in an application.  It only runs checks
    // in dev mode and does not impact the production build
  <React.StrictMode>
    {/* App is the User Defined component from App.js  */}
    {/* In our User Defined components, we always use an uppercase letter to begin,  */}
    {/* this is how jsx differentiate's between a user defined component and a normal dom element */}
    <App />
  </React.StrictMode>,
  // 'root' is targeting the 'root' div in the index.html file 
  document.getElementById('root')
);

