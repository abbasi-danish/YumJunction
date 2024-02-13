import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";


describe('Accordion', () => {
    test('renders Accordion component with correct title and description', () => {
      const header_Image = '../../images/testphoto.jpeg';
      const title = 'Accordion Title';
      const description = 'Accordion Description';
  
      render(<Accordion header_Image={header_Image} title={title} description={description} />);

      // Assert that the description is initially hidden
      expect(screen.queryByText(description)).not.toBeInTheDocument();

      // Assert that the title is rendered
      expect(screen.getByText(title)).toBeInTheDocument();

      // Assert that image is rendered
      expect(screen.getByAltText('Logo of cartoon')).toBeInTheDocument();
      
    });
  
    test('toggles accordion body when header is clicked', () => {
      const header_Image = '../../images/testphoto.jpeg';
      const title = 'Accordion Title';
      const description = 'Accordion Description';
  
      render(<Accordion header_Image={header_Image} title={title} description={description} />);
  
      const accordionHeader = screen.getByText(title);
  
      // Assert that the accordion body is initially hidden
      expect(screen.queryByText(description)).not.toBeInTheDocument();
  
      // Click on the accordion header to toggle the accordion body
      fireEvent.click(accordionHeader);
  
      // Assert that the accordion body is now visible
      expect(screen.getByText(description)).toBeInTheDocument();
  
      // Click on the accordion header again to toggle the accordion body back to hidden
      fireEvent.click(accordionHeader);
  
      // Assert that the accordion body is hidden again
      expect(screen.queryByText(description)).not.toBeInTheDocument();
    });
  });
        