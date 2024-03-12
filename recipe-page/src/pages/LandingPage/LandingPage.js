import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import './LandingPage.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../../components/Accordion/AccordionItem';


function LandingPage() {
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    fetch('/api/accordionItems')
      .then(res => res.json())
      .then(data => setAccordions(data));
  }, []);

  return (
    <div className="LandingPage">
      <div className="header" style={{ borderBottom: "3px solid black", width: "100%"}}>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <h1 style={{ fontFamily: 'Impact' }}>YumJunction</h1>
            </div>
            <div className = "website-description">
                <h2 style={{ textAlign: "left" }}>Welcome!</h2>
                <p style={{ textAlign: "left" }}>YumJunction is a website that provides recipes for food from your favorite TV shows and movies. We hope you enjoy! THIS WORKS !!!!!!</p>
            </div>

            {accordions.map(accordion => (
              <Accordion key = {index}>
                <AccordionItem
                  headerText={accordion.headerTitle}
                  bodyText={accordion.headerBody}
                  imageAlt={accordion.imageAlt}
                  imageSrc={accordion.imageSrc}
                  linkTo={accordion.linkTo}
                />
              </Accordion>
            ))}

            </div>
  );
}; 
            {/* <Accordion>
                <AccordionItem
                    imageSrc={adventureTime}
                    imageAlt="adventure-time-logo"
                    linkTo="/recipe1"
                    headerText="Adventure Time: Perfect Sandwich"
                    bodyText="In the whimsical world of Adventure Time, Jake the Dog crafts a sandwich beyond imagination in 'Time Sandwich.' With layers of savory bacon, crisp lettuce, zesty mustard, and a sprinkle of magic, each bite becomes a journey through flavor and fantasy, capturing the essence of Ooo in every delicious bite."
                  />
            </Accordion>

            <Accordion>
                <AccordionItem
                    imageSrc={adventureTime}
                    imageAlt="adventure-time-logo"
                    linkTo="/recipe5"
                    headerText="Adventure Time: Bacon Pancakes"
                    bodyText="Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time! This enchanting dish combines fluffy pancakes with crispy bacon, creating a magical blend of sweet and savory flavors. Whisk together a batter of flour, sugar, and spices, then cook to golden perfection in a cast iron skillet. Top with butter and maple syrup for a truly adventurous breakfast experience that's sure to delight fans of all ages!"
                  />
            </Accordion>

            <Accordion>
                <AccordionItem
                    imageSrc={couragelogo}
                    imageAlt="courage-logo"
                    linkTo="/recipe2"
                    headerText="Courage the Cowardly Dog: Muriel's Flan"
                    bodyText="In the classic episode 'The Great Fusilli,' Courage the Cowardly Dog must save Muriel from the clutches of the evil Fusilli, who plans to turn her into a flan! In this recipe, we'll be making a flan of our own, with a rich caramel sauce and a creamy custard filling."
                  />
            </Accordion>

            <Accordion>
                <AccordionItem
                    imageSrc={ForceofEvil}
                    imageAlt="starwars-logo"
                    linkTo="/recipe3"
                    headerText="Star vs. Forces of Evil: Banagic IceCream"
                    bodyText="The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil. This recipe is a delicious combination of bananas, magic, and ice cream. It's a perfect treat for a hot summer day or a magical adventure!"
                  />
            </Accordion>

            <Accordion>
                <AccordionItem
                    imageSrc={spongeboblogo}
                    imageAlt="spongebob-logo"
                    linkTo="/recipe6"
                    headerText="Spongebob Squarepants: Krabby Patty"
                    bodyText="In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty. With a secret recipe known only to Mr. Krabs, the Krabby Patty is a mouthwatering blend of lettuce, cheese, tomatoes, tartar sauce, mayo, flour, tumeric, sea salt, land salt, barnacle shavings, the patty, mustard, ketchup, the secret formula, two buns, onions, and pickles. In this recipe, we'll be making our own Krabby Patty, with a few substitutions for the secret formula."
                  />
            </Accordion>

            <Accordion>
                <AccordionItem
                    imageSrc={froglogo}
                    imageAlt="frog-logo"
                    linkTo="/recipe4"
                    headerText="Princess and the Frog: Beignets"
                    bodyText="Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen"
                  />
            </Accordion>

            <Accordion>
                <AccordionItem
                    imageSrc={ratlogo}
                    imageAlt="rat-logo"
                    linkTo="/recipe7"
                    headerText="Ratatouille: Ratatouille"
                    bodyText="Take part in the favor packed, adventure with Remy's Ratatouille. Inspired by Disney's delightful rat chef, expertly layered vegetables dancing in perfect harmony, creating a symphony of taste that will transport you back to your childhood!"
                  />
            </Accordion>


 */}


export default LandingPage;