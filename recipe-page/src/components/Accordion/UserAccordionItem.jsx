import React from 'react';
import { Accordion } from 'react-bootstrap';
import placeholder from '../../images/Pakistan.png';
import './Accordion.css';

const UserAccordionItem = ({title, description, ingredients, directions}) => {
    const ingredientsArray = ingredients.split(', ');
return (
    <Accordion.Item eventKey="0">
        <Accordion.Header className='custom-header'>
        <img src={placeholder} alt="cartoon" className="header-image" />
        <h3>{title}</h3>
        </Accordion.Header>
        <Accordion.Body>
            <p>{description}</p>
            <p>Ingredients: {ingredientsArray.join(', ')}</p>
            <p>Directions: {directions} </p>
        </Accordion.Body>
    </Accordion.Item>
);
};

export default UserAccordionItem;