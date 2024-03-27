import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import AccordionItem from "./AccordionItem";
import {Accordion} from 'react-bootstrap';




describe('Accordion', () => {
    test('renders Accordion component with correct title and description', () => {
      const header_Image = '../../images/testphoto.jpeg';
      const title = 'Accordion Title';
      const placeHolder = '/'
      const imageAlt = 'test'
      const bodyText = 'description'
  
      render(
      <Router>
      <Accordion defaultActiveKey="-1">
        <AccordionItem
      imageSrc={header_Image} 
      imageAlt={imageAlt} 
      headerText={title} 
      bodyText={bodyText} 
      linkTo={placeHolder}
        />
      </Accordion>
      
      </Router>
      );

    // Assert that accordion is initially collapsed
    const header = screen.getByText(title);
    expect(header.closest('button')).toHaveAttribute('aria-expanded', 'false');

      // Assert that the title is rendered
      expect(screen.getByText(title)).toBeInTheDocument();

      // Assert that image is rendered
      expect(screen.getByAltText('test')).toBeInTheDocument();
      
    });


  
    test('toggles accordion body when header is clicked', () => {
      const imageSrc = '../../images/testphoto.jpeg';
      const headerText = 'Accordion Title';
      const bodyText = 'Accordion Description';
      const placeHolder = '/'
      const imageAlt = 'test'
  
      render(

      <Router>
      <Accordion defaultActiveKey="-1">
        <AccordionItem
      imageSrc={imageSrc} 
      imageAlt={imageAlt} 
      headerText={headerText} 
      bodyText={bodyText} 
      linkTo={placeHolder}
        />
      </Accordion>
      </Router>
      );
  
     
  
      // Assert that the accordion body is initially hidden
      const accordionHeader = screen.getByText(headerText);
      expect(accordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  
      // Click on the accordion header to toggle the accordion body
      fireEvent.click(accordionHeader);
  
      // Assert that the accordion body is now visible
      expect(accordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'true');
  
      // Click on the accordion header again to toggle the accordion body back to hidden
      fireEvent.click(accordionHeader);
  
      // Assert that the accordion body is hidden again
      expect(accordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
    });
  });
        