import './styles.css';
import React, { useState } from 'react'
import flan from './images/courage-flan.png'
import logo from './images/logo.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h1>YumJunction</h1>
      </div>
    </div>
    
  );
}


export default App;
