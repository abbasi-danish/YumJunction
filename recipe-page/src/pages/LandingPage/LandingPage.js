import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import './LandingPage.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../../components/Accordion/AccordionItem';
import UserAccordionitem from '../../components/Accordion/UserAccordionItem'
import AddRecipeForm from '../../components/AddRecipeForm/AddRecipeForm';

function LandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
    const toggleForm = () => {
      setIsFormOpen(!isFormOpen);
  };
  const [accordions, setAccordions] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);



  useEffect(() => {
    fetch('http://localhost:3001/api/accordionItems')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        setAccordions(data);
      });


  fetch('http://localhost:3001/api/userRecipes')
  .then(res => res.json())
  .then(data => {
    console.log('Fetched data:', data);
    setUserRecipes(data);
  });
}, []);

  return (
    <div className="LandingPage">
      <div className="header" style={{ borderBottom: "3px solid black", width: "100%"}}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div>
                <button onClick={toggleForm}>Add Recipe</button>
                {isFormOpen && <AddRecipeForm />}
              </div>
            </div>
                <div className="logo-container">
                    <img className="logo" style={{ float: 'left' }} src={logo} alt="logo" />
                </div>
                <h1 style={{ fontFamily: 'Impact', paddingTop: '30px' }}>YumJunction</h1>
            </div>
            <div className = "website-description">
                <h2 style={{ textAlign: "left" }}>Welcome!</h2>
                <p style={{ textAlign: "left" }}>YumJunction is a website that provides recipes for food from your favorite TV shows and movies. We hope you enjoy! THIS WORKS !!!!!!</p>
            </div>
            {accordions.map((accordion, index) => (
              <Accordion>
                <AccordionItem
                  key = {index}
                  headerText={accordion.headerTitle}
                  bodyText={accordion.headerBody}
                  imageAlt={accordion.imageAlt}
                  imageSrc={accordion.imageSrc}
                  linkTo={accordion.link}
                />

</Accordion>
            ))}
            {userRecipes.map((recipe, index) => (
              <Accordion key={index}>
                <UserAccordionitem
                  title={recipe.title}
                  description={recipe.description}
                  ingredients={recipe.ingredients}
                  directions={recipe.directions}
                />
              </Accordion>
            ))}
            </div>
  );
}; 

export default LandingPage;