import React from 'react';
import health from './health.svg';
import './App.css';
import FacebookBtn from './FacebookBtn'
import GoogleBtn from './GoogleBtn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={health} alt="logo" />
        <p>
          Health Crumbs Mock
        </p>
        <GoogleBtn />
        <br></br>
        <FacebookBtn />
      </header>
    </div>
  );
}

export default App;
