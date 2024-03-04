import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { getByText } from '@testing-library/react';

describe('LandingPage', () => {
test('renders YumJunction header', () => {
  render(
  <Router>
    <LandingPage />
  </Router> 
  
  );
  const headerElement = screen.getAllByText(/YumJunction/i);
  expect(headerElement.length).toBe(2);
});

test('accordion expands and collapses when clicked', () => {
  render(
  <Router>
    <LandingPage />
  </Router>
  
  );
  
  // Tests a few accordion header elements
  const flanAccordionHeader = screen.getByText(/Courage the Cowardly Dog: Muriel's Flan/i);
  const krabbyPattyAccordionHeader = screen.getByText(/Spongebob Squarepants: Krabby Patty/i);
  const banagicIceCreamAccordionHeader = screen.getByText(/Star vs. Forces of Evil: Banagic IceCream/i);
  const beignetsAccordionHeader = screen.getByText(/Princess and the Frog: Beignets/i);
  const ratatouilleAccordionHeader = screen.getByText(/Ratatouille: Ratatouille/i);
  
  // Check if the accordion content is initially hidden
  expect(flanAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  expect(krabbyPattyAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  expect(banagicIceCreamAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  expect(beignetsAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  expect(ratatouilleAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');


  // Click on the accordion headers to expand them
  fireEvent.click(flanAccordionHeader);
  fireEvent.click(krabbyPattyAccordionHeader);
  fireEvent.click(banagicIceCreamAccordionHeader);
  fireEvent.click(beignetsAccordionHeader);
  fireEvent.click(ratatouilleAccordionHeader);
  
  // Check if the accordion content is now visible
  expect(flanAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'true');
  expect(krabbyPattyAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'true');
  expect(banagicIceCreamAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'true');
  expect(beignetsAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'true');
  expect(ratatouilleAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'true');

  
  // Click on the accordion headers again to collapse them
  fireEvent.click(flanAccordionHeader);
  fireEvent.click(krabbyPattyAccordionHeader);
  fireEvent.click(banagicIceCreamAccordionHeader);
  fireEvent.click(beignetsAccordionHeader);
  fireEvent.click(ratatouilleAccordionHeader);
  
  // Check if the accordion content is now hidden again
  expect(flanAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  expect(krabbyPattyAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  expect(banagicIceCreamAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  expect(beignetsAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
  expect(ratatouilleAccordionHeader.closest('button')).toHaveAttribute('aria-expanded', 'false');
});});