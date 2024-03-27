import React, { useState } from 'react';
import '../../index.css';
import flan from '../../images/courage-flan.png';
import NewPage from '../../components/NewPage/NewPage';
import Carousel from '../../components/Carousel/Carousel';

import {Button} from 'react-bootstrap';

function Recipe2() {
  const ingredients = ["1 cup granulated sugar", "1/4 cup water", "4 large eggs", "2 cups whole milk", "1 teaspoon vanilla extract"];
  const directions = [
    "Preheat oven to 350°F. Place a 9-inch round cake pan in a large roasting pan.",
    "In a small saucepan, combine sugar and water. Cook over medium heat, stirring occasionally, until sugar is dissolved and mixture is a light caramel color, about 10 minutes. Immediately pour into cake pan, swirling to coat bottom of pan.",
    "In a large bowl, whisk together eggs, milk, and vanilla. Pour into cake pan over caramel. Place roasting pan in oven and pour in enough boiling water to come halfway up sides of cake pan.",
    "Bake until flan is set but still jiggles slightly in center, about 1 hour. Remove cake pan from water bath and let cool completely on a wire rack. Cover and refrigerate until cold, at least 4 hours or overnight.",
    "To unmold, run a knife around edge of flan. Place a large plate over cake pan and invert. Remove cake pan and serve flan cold.",
    "Enjoy!"
  ];

  const [cookingMode, setCookingMode] = useState(false);

  const toggleCookingMode = () => {
    setCookingMode(!cookingMode);
  };

  const exitCookingMode = () => {
    setCookingMode(false);
  };

  return (
    <div>
      <div className='cookingMode'>
        {cookingMode ? (
          <div>
            <Carousel
              slides={directions.map((direction, index) => ({
                type: 'text',
                content: direction,
                id: index,
              }))}
              title='Cooking Mode'
            />
            <Button style={{ backgroundColor: '#333333' }} onClick={exitCookingMode}> Exit Cooking Mode
            </Button>
            
          </div>
        ) : (
          <Button style={{ backgroundColor: '#333333' }} onClick={toggleCookingMode}> Cooking Mode
            </Button>

        )}
      </div>
      {!cookingMode && (
        <div className='recipe'>
          <NewPage
            title="Muriel's Flan"
            pageImage={flan}
            ingredients={ingredients}
            directions={directions}
          />
        </div>
      )}
    </div>
  );
}

export default Recipe2;