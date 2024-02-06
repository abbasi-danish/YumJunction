import React from 'react';
import '../../index.css';
import flan from '../../images/courage-flan.jpg';

function Recipe2() {
  return (
    <div className="recipe">
      <h1>Courage the Cowardly Dog: Muriel's Flan</h1>
      <img src={flan} alt = "Courage the Cowardly Dog: Muriel's Flan" />
    </div>

  );
}

export default Recipe2;