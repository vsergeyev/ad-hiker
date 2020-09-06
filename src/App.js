import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify'      // ADD
import config from './aws-exports'     // ADD
Amplify.configure(config)            // ADD

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://catsruletheworld.s3.amazonaws.com/cat.jpg" className="App-logo" alt="logo" />
        <p>
          Hello cats!
        </p>
      </header>
    </div>
  );
}

export default App;
