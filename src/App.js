import React from 'react';
import logo from './logo.svg';
import './App.css';

// this looks like html but is jsx
// class is reserved for javascript, so in jsx we use className 

function App() {
  // the parentheses after return allow us to separate our jsx into more than one
    // line for better readability
  return (
    // Fragments are unique to React
    // Within jsx we can wrap a blank tag, or a fragment, in order to add content to our function, 
    // because we can only return One Thing
    <>
      <div className="App">
        <header className="App-header">
          {/* logo is a javascript variable that we imported at the top  */}
          {/* in order to use javascript in jsx we surround it with curly braces  */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <p>This is a paragraph.</p>
    </>
  );
}

export default App;
