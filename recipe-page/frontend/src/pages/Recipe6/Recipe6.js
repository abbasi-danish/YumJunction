import React, { useState } from 'react';
import krabbypatty from '../../images/krabbypatty.jpg';
import NewPage from '../../components/NewPage/NewPage';
import Carousel from '../../components/Carousel/Carousel';
import { Button } from 'react-bootstrap';

function Recipe6() {
    const ingredients = ["2 cups ground beef", "1/4 cup breadcrumbs", "1/4 cup chopped onions", "1/4 cup chopped pickles", "1/4 cup ketchup", "1/4 cup mustard", "1/4 teaspoon salt", "1/4 teaspoon pepper", "4 hamburger buns"];
    const directions = ["In a large bowl, add ground beef and seasonings and shape into four patties", 
    "Grill, covered, over medium heat or broil 4 in.", "Heat for 5-7 minutes on each side or until a thermometer reads 160° and juices run clear.", 
    "Serve on buns.",
    "Enjoy!"];

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
                        title='Krabby Patty'
                        pageImage={krabbypatty}
                        ingredients={ingredients}
                        directions={directions}
                    />
                </div>
            )}
        </div>
    );
}

export default Recipe6;