import './styles.css';
import React, { useState } from 'react'
import flan from './images/courage-flan.png'
import logo from './images/logo.png'

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h1>YumJunction</h1>
      </div>
      

      <div className="accordion">
        <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
          <img className="accordion-image" src={flan} alt="flan" />
          <h2>Courage The Cowardly Dog: Flan </h2>
          <div className="accordion-indicator">{isOpen ? "-" : "+"}</div>
        </div>
        {isOpen && (
          <div className="accordion-body">
            <div className="description">
              <h3>Description</h3>
              <p>This is a delicious flan recipe.</p>
            </div>
            <div className="recipe">
              <h3>Recipe</h3>
              <p>Here's how you can make a flan:</p>
              <ul>
                <li>Step 1: Prepare the caramel sauce.</li>
                <li>Step 2: Mix the ingredients for the flan.</li>
                <li>Step 3: Pour the mixture into ramekins.</li>
                <li>Step 4: Bake in a water bath.</li>
                <li>Step 5: Chill and serve.</li>
              </ul>
            </div>
            <div className="instructions">
              <h3>Instructions</h3>
              <ol>
                <li>Preheat the oven to 350°F.</li>
                <li>Prepare the caramel sauce by heating sugar in a saucepan until it melts and turns golden brown.</li>
                <li>In a separate bowl, whisk together eggs, condensed milk, evaporated milk, and vanilla extract.</li>
                <li>Pour the caramel sauce into the bottom of each ramekin.</li>
                <li>Divide the flan mixture equally among the ramekins.</li>
                <li>Place the ramekins in a baking dish filled with hot water.</li>
                <li>Bake for 45-50 minutes or until the flan is set.</li>
                <li>Remove from the oven and let it cool. Then refrigerate for at least 2 hours before serving.</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default App;
