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

test('renders Spongebob Squarepants: Krabby Patty', () => {
  render(<App />);
  const pattyElement = screen.getByText(/Spongebob Squarepants: Krabby Patty/i);
  expect(pattyElement).toBeInTheDocument();
});

test('accordion expands and collapses when clicked', () => {
  render(<App />);
  
  // Find the accordion header elements
  const perfectSandwichAccordionHeader = screen.getByText(/Adventure Time: Jake's Perfect Sandwich/i);
  const baconPancakesAccordionHeader = screen.getByText(/Adventure Time: Jake's Bacon Pancakes/i);
  const flanAccordionHeader = screen.getByText(/Courage the Cowardly Dog: Muriel's Flan/i);
  const krabbyPattyAccordionHeader = screen.getByText(/Spongebob Squarepants: Krabby Patty/i);
  
  // Check if the accordion content is initially hidden
  expect(screen.queryByText(/In the whimsical world of Adventure Time/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the classic episode 'The Great Fusilli,'/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).not.toBeInTheDocument();
  
  // Click on the accordion headers to expand them
  fireEvent.click(perfectSandwichAccordionHeader);
  fireEvent.click(baconPancakesAccordionHeader);
  fireEvent.click(flanAccordionHeader);
  fireEvent.click(krabbyPattyAccordionHeader);
  
  // Check if the accordion content is now visible
  expect(screen.getByText(/In the whimsical world of Adventure Time/i)).toBeInTheDocument();
  expect(screen.getByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).toBeInTheDocument();
  expect(screen.getByText(/In the classic episode 'The Great Fusilli,'/i)).toBeInTheDocument();
  expect(screen.getByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).toBeInTheDocument();
  
  // Click on the accordion headers again to collapse them
  fireEvent.click(perfectSandwichAccordionHeader);
  fireEvent.click(baconPancakesAccordionHeader);
  fireEvent.click(flanAccordionHeader);
  fireEvent.click(krabbyPattyAccordionHeader);
  
  // Check if the accordion content is now hidden again
  expect(screen.queryByText(/In the whimsical world of Adventure Time/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the classic episode 'The Great Fusilli,'/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).not.toBeInTheDocument();
});