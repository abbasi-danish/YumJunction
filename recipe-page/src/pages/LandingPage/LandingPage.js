import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import './LandingPage.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../../components/Accordion/AccordionItem';


function LandingPage() {
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/accordionItems')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        setAccordions(data);
      });
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
            </div>
  );
}; 

export default LandingPage;