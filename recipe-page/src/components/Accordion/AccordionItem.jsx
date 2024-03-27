import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Accordion.css';

const AccordionItem = ({imageSrc, imageAlt, linkTo, headerText, bodyText }) => {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header className='custom-header'>
        <img src={imageSrc} alt={imageAlt} className="header-image" />
        <Link to={linkTo} style={{fontSize:'30px'}}>{headerText}</Link>
      </Accordion.Header>
      <Accordion.Body>{bodyText}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;