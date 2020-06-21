import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
