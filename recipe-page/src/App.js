import React from 'react';
import Accordion from './Accordion';
import perfectSandwich from './images/perfect-sandwich.jpg';
import adventureTime from './images/adventure-time.jpg';
import logo from './images/logo.png';


function App() {
  const ingredients = [" 1 boneless ribeye (the size of your bread)", " 2 sprigs thyme", " 2 sprigs rosemary", " Salt & freshly ground pepper", " 1 lobster soul", " 1 cup vegetable oil", " Juice of 1 lemon", " 3 egg yolks", " 1/2 pound bacon", " 1 Cornish game hen, deboned", " 3 thinly sliced rounds of Vidalia onion, plus more for tear-gathering", " 1 large, long sourdough loaf", " 3 Tbsp cream cheese", " 3 Tbsp fresh dill, picked", " 1 dill pickle, sliced thinly", " 1 egg, hard-boiled, peeled, and sliced", " 10 thin slices of cucumber", " 8 thin slices of Roma tomato", " 2 tsp tears", " 5 slices of bacon", " 1 bird from the counter"];
  const directions = [
    "Vacuum seal ribeye with thyme, rosemary, salt, and pepper, and place in a sous vide bath set at 135°F for 2 hours.",
    "Preheat oven to 350°F.  Steam lobster tail for for 8 minutes, remove meat and reserve for other applications.  Break up the shell into pieces and place in a high-powered blender along with vegetable oil, and blend for 30-60 seconds, or until lobster is finely ground.  Simmer mixture for 15 minutes, and strain through a fine mesh sieve.  Set aside to cool completely.",
    "In an immersion blender cup, combine lemon and egg yolks.  Blend briefly to combine, and with immersion blender running, slowly pour lobster oil down the side of the cup, until a thick aioli forms.  Refrigerate until ready to use.",
    "Cook bacon as desired, reserve fat.  Brush Cornish game hen with fat, and fry skin-side-down in a hot cast iron skillet, flipping once golden.  After flipping, place in the oven and cook until meat registers 165°F, about 10 minutes.",
    "Assemble the sandwich - halve the loaf, and torch both sides of the interior with a culinary torch (only for accuracy - recommend toasting bread in the oven or throwing under the broiler).  Spread with cream cheese, and shingle sliced pickles on one side of the sandwich, while sprinkling dill on the other side of the sandwich.  On the pickle side of the sandwich, shingle the hard-boiled egg slices, followed by the Cornish game hen, followed by cucumber, then sweet yellow onion, Roma tomatoes, steak, tears, and bacon.  Coat the other side of the bread with lobster aioli, top the sandwich, slice, and serve."
];
  return (
    <div className="App">
      <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <h1>YumJunction</h1>
            </div>
        <Accordion 
          header_Image={adventureTime}
          accordion_image={perfectSandwich}
          title={"Adventure Time: Jake's Perfect Sandwich"}
          description={"This is a recipe for Jake's perfect sandwich. It's a sandwich that Jake makes in the episode 'Time Sandwich'."}
          ingredients={ingredients}
          directions={directions}
        />
        <Accordion
          header_Image={perfectSandwich}
          accordion_image={adventureTime}
          title={"Adventure Time: Jake's Perfect Sandwich"}
          description={"This is a recipe for Jake's perfect sandwich. It's a sandwich that Jake makes in the episode 'Time Sandwich'."}
          ingredients={ingredients}
          directions={directions}
          />
    </div>
  )
}


export default App;
