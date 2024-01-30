import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YumJunction header', () => {
  render(<App />);
  const headerElement = screen.getByText(/YumJunction/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Adventure Time: Jake\'s Perfect Sandwich', () => {
  render(<App />);
  const sandwichElement = screen.getByText(/Adventure Time: Jake's Perfect Sandwich/i);
  expect(sandwichElement).toBeInTheDocument();
});

test('renders Adventure Time: Jake\'s Bacon Pancakes', () => {
  render(<App />);
  const pancakesElement = screen.getByText(/Adventure Time: Jake's Bacon Pancakes/i);
  expect(pancakesElement).toBeInTheDocument();
});

test('renders Courage the Cowardly Dog: Muriel\'s Flan', () => {
  render(<App />);
  const flanElement = screen.getByText(/Courage the Cowardly Dog: Muriel's Flan/i);
  expect(flanElement).toBeInTheDocument();
});

test('accordion expands and collapses when clicked', () => {
  render(<App />);
  
  // Find the accordion header element
  const accordionHeader = screen.getByText(/Adventure Time: Jake's Perfect Sandwich/i);
  
  // Check if the accordion content is initially hidden
  expect(screen.queryByText(/In the whimsical world of Adventure Time/i)).not.toBeInTheDocument();
  
  // Click on the accordion header to expand it
  fireEvent.click(accordionHeader);
  
  // Check if the accordion content is now visible
  expect(screen.getByText(/In the whimsical world of Adventure Time/i)).toBeInTheDocument();
  
  // Click on the accordion header again to collapse it
  fireEvent.click(accordionHeader);
  
  // Check if the accordion content is now hidden again
  expect(screen.queryByText(/In the whimsical world of Adventure Time/i)).not.toBeInTheDocument();
});