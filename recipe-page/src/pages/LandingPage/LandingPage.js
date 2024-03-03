import React from 'react';
import perfectSandwich from '../../images/perfect-sandwich.jpg';
import adventureTime from '../../images/adventure-time.jpg';
import baconPancakes from '../../images/bacon-pancakes.jpg';
import couragelogo from '../../images/courage-logo.png';
import spongeboblogo from '../../images/spongebob-logo.png';
import krabbypatty from '../../images/krabbypatty.jpg';
import logo from '../../images/logo.png';
import ratlogo from '../../images/ratlogo.png';
import ratFood from '../../images/ratFood.jpg';
import frogfood from '../../images/frogfood.jpg';
import froglogo from '../../images/froglogo.png';
import banana from '../../images/FoodofStar.png';
import ForceofEvil from '../../images/ForceofEvil.jpg';
import './LandingPage.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../../components/Accordion/AccordionItem';


function LandingPage() {


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
            <Accordion>
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
                    bodyText="In the classic episode 'The Great Fusilli,' Courage the Cowardly Dog must save Muriel from the clutches of the evil Fusilli, who plans to turn her into a flan! In this recipe, we'll be making a flan of our own, with a rich caramel sauce and a creamy custard filling."
                  />
            </Accordion>

            <Accordion>
                <AccordionItem
                    imageSrc={spongeboblogo}
                    imageAlt="starwars-logo"
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
                    imageSrc={froglogo}
                    imageAlt="rat-logo"
                    linkTo="/recipe7"
                    headerText="Ratatouille: Ratatouille"
                    bodyText="Take part in the favor packed, adventure with Remy's Ratatouille. Inspired by Disney's delightful rat chef, expertly layered vegetables dancing in perfect harmony, creating a symphony of taste that will transport you back to your childhood!"
                  />
            </Accordion>




        {/* <Accordion 
          header_Image={adventureTime}
          accordion_Image={perfectSandwich}
          title={ <Link to="/recipe1">Adventure Time: Perfect Sandwich</Link>} 
          description={"In the whimsical world of Adventure Time, Jake the Dog crafts a sandwich beyond imagination in 'Time Sandwich.' With layers of savory bacon, crisp lettuce, zesty mustard, and a sprinkle of magic, each bite becomes a journey through flavor and fantasy, capturing the essence of Ooo in every delicious bite."}
        />
        <Accordion
          header_Image={adventureTime}
          accordion_Image={baconPancakes}
          title={ <Link to="/recipe5">Adventure Time: Bacon Pancakes</Link>} 
          description={"Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time! This enchanting dish combines fluffy pancakes with crispy bacon, creating a magical blend of sweet and savory flavors. Whisk together a batter of flour, sugar, and spices, then cook to golden perfection in a cast iron skillet. Top with butter and maple syrup for a truly adventurous breakfast experience that's sure to delight fans of all ages!"}
          />
        <Accordion
        header_Image={couragelogo}
        title= { <Link to="/recipe2">Courage the Cowardly Dog: Muriel's Flan</Link>} 
        description="In the classic episode 'The Great Fusilli,' Courage the Cowardly Dog must save Muriel from the clutches of the evil Fusilli, who plans to turn her into a flan! In this recipe, we'll be making a flan of our own, with a rich caramel sauce and a creamy custard filling."
    
        />
        <Accordion
        header_Image={ForceofEvil}
        accordion_Image={banana}
        title={ <Link to="/recipe3">Star vs. Forces of Evil: Banagic IceCream</Link>} 
        description="The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil. This recipe is a delicious combination of bananas, magic, and ice cream. It's a perfect treat for a hot summer day or a magical adventure!"
        />
      <Accordion 
      header_Image={spongeboblogo}
      accordion_Image={krabbypatty}
      title={ <Link to="/recipe6">Spongebob Squarepants: Krabby Patty</Link>} 

      description={"In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty. With a secret recipe known only to Mr. Krabs, the Krabby Patty is a mouthwatering blend of lettuce, cheese, tomatoes, tartar sauce, mayo, flour, tumeric, sea salt, land salt, barnacle shavings, the patty, mustard, ketchup, the secret formula, two buns, onions, and pickles. In this recipe, we'll be making our own Krabby Patty, with a few substitutions for the secret formula."}
      />

<Accordion 
      header_Image={froglogo}
      accordion_Image={frogfood}
      title={ <Link to="/recipe4">Princess and the Frog: Beignets</Link>} 
      description={"Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen"}
      />

      <Accordion 
      header_Image={ratlogo}
      accordion_Image={ratFood}
      title={ <Link to="/recipe7">Ratatouille: Ratatouille</Link>} 

      description={"Take part in the favor packed, adventure with Remy's Ratatouille. Inspired by Disney's delightful rat chef, expertly layered vegetables dancing in perfect harmony, creating a symphony of taste that will transport you back to your childhood!"}
      /> */}
    </div>
  )
}


export default LandingPage;