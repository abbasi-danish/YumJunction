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
  const baconPancakesAccordionHeader = screen.getByText(/Adventure Time: Jake's Bacon Pancakes/i);
  const flanAccordionHeader = screen.getByText(/Courage the Cowardly Dog/i);
  const krabbyPattyAccordionHeader = screen.getByText(/Spongebob Squarepants: Krabby Patty/i);
  const banagicIceCreamAccordionHeader = screen.getByText(/Star vs. Forces of Evil: Banagic IceCream/i);
  const beignetsAccordionHeader = screen.getByText(/Princess and the Frog: Beignets/i);
  const ratatouilleAccordionHeader = screen.getByText(/Ratatouille: Remy's Ratatouille/i);
  
  // Check if the accordion content is initially hidden
  expect(screen.queryByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the classic episode 'The Great Fusilli,'/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).not.toBeInTheDocument();
  expect(screen.queryByText(/The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil./i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Take part in the favor packed, adventure with Remy's Ratatouille./i)).not.toBeInTheDocument
  // Click on the accordion headers to expand them
  fireEvent.click(baconPancakesAccordionHeader);
  fireEvent.click(flanAccordionHeader);
  fireEvent.click(krabbyPattyAccordionHeader);
  fireEvent.click(banagicIceCreamAccordionHeader);
  fireEvent.click(beignetsAccordionHeader);
  fireEvent.click(ratatouilleAccordionHeader);
  
  // Check if the accordion content is now visible
  expect(screen.getByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).toBeInTheDocument();
  expect(screen.getByText(/In the classic episode 'The Great Fusilli,'/i)).toBeInTheDocument();
  expect(screen.getByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).toBeInTheDocument();
  expect(screen.getByText(/The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil./i)).toBeInTheDocument();
  expect(screen.getByText(/Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen/i)).toBeInTheDocument();
  expect(screen.getByText(/Take part in the favor packed, adventure with Remy's Ratatouille./i)).toBeInTheDocument
  
  // Click on the accordion headers again to collapse them
  fireEvent.click(baconPancakesAccordionHeader);
  fireEvent.click(flanAccordionHeader);
  fireEvent.click(krabbyPattyAccordionHeader);
  fireEvent.click(banagicIceCreamAccordionHeader);
  fireEvent.click(beignetsAccordionHeader);
  fireEvent.click(ratatouilleAccordionHeader);
  
  // Check if the accordion content is now hidden again
  expect(screen.queryByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the classic episode 'The Great Fusilli,'/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).not.toBeInTheDocument();
  expect(screen.queryByText(/The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil./i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Take part in the favor packed, adventure with Remy's Ratatouille./i)).not.toBeInTheDocument
});});