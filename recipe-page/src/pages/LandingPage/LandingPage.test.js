import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders YumJunction header', () => {
  render(<LandingPage />);
  const headerElement = screen.getAllByText(/YumJunction/i);
  expect(headerElement.length).toBe(2);
});

test('renders Adventure Time: Jake\'s Perfect Sandwich', () => {
  render(<LandingPage/>);
  const sandwichElement = screen.getByText(/Adventure Time: Jake's Perfect Sandwich/i);
  expect(sandwichElement).toBeInTheDocument();
});

test('renders Adventure Time: Jake\'s Bacon Pancakes', () => {
  render(<LandingPage />);
  const pancakesElement = screen.getByText(/Adventure Time: Jake's Bacon Pancakes/i);
  expect(pancakesElement).toBeInTheDocument();
});

test('renders Courage the Cowardly Dog: Muriel\'s Flan', () => {
  render(<LandingPage />);
  const flanElement = screen.getByText(/Courage the Cowardly Dog: Muriel's Flan/i);
  expect(flanElement).toBeInTheDocument();
});

test('renders Spongebob Squarepants: Krabby Patty', () => {
  render(<LandingPage />);
  const pattyElement = screen.getByText(/Spongebob Squarepants: Krabby Patty/i);
  expect(pattyElement).toBeInTheDocument();
});
test('renders Star vs. Forces of Evil: Banagic IceCream', () => {
  render(<LandingPage />);
  const icecreamElement = screen.getByText(/Star vs. Forces of Evil: Banagic IceCream/i);
  expect(icecreamElement).toBeInTheDocument();
});
test('renders Princess and the Frog: Beignets', () => {
  render(<LandingPage />);
  const beignetElement = screen.getByText(/Princess and the Frog: Beignets/i);
  expect(beignetElement).toBeInTheDocument();
});
test('renders Ratatouille: Remy\'s Ratatouille', () => {
  render(<LandingPage />);
  const ratElement = screen.getByText(/Ratatouille: Remy's Ratatouille/i);
  expect(ratElement).toBeInTheDocument();
});

test('accordion expands and collapses when clicked', () => {
  render(<LandingPage />);
  
  // Find the accordion header elements
  const perfectSandwichAccordionHeader = screen.getByText(/Adventure Time: Jake's Perfect Sandwich/i);
  const baconPancakesAccordionHeader = screen.getByText(/Adventure Time: Jake's Bacon Pancakes/i);
  const flanAccordionHeader = screen.getByText(/Courage the Cowardly Dog: Muriel's Flan/i);
  const krabbyPattyAccordionHeader = screen.getByText(/Spongebob Squarepants: Krabby Patty/i);
  const banagicIceCreamAccordionHeader = screen.getByText(/Star vs. Forces of Evil: Banagic IceCream/i);
  const beignetsAccordionHeader = screen.getByText(/Princess and the Frog: Beignets/i);
  const ratatouilleAccordionHeader = screen.getByText(/Ratatouille: Remy's Ratatouille/i);
  
  // Check if the accordion content is initially hidden
  expect(screen.queryByText(/In the whimsical world of Adventure Time/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the classic episode 'The Great Fusilli,'/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).not.toBeInTheDocument();
  expect(screen.queryByText(/The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil./i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Take part in the favor packed, adventure with Remy's Ratatouille./i)).not.toBeInTheDocument
  // Click on the accordion headers to expand them
  fireEvent.click(perfectSandwichAccordionHeader);
  fireEvent.click(baconPancakesAccordionHeader);
  fireEvent.click(flanAccordionHeader);
  fireEvent.click(krabbyPattyAccordionHeader);
  fireEvent.click(banagicIceCreamAccordionHeader);
  fireEvent.click(beignetsAccordionHeader);
  fireEvent.click(ratatouilleAccordionHeader);
  
  // Check if the accordion content is now visible
  expect(screen.getByText(/In the whimsical world of Adventure Time/i)).toBeInTheDocument();
  expect(screen.getByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).toBeInTheDocument();
  expect(screen.getByText(/In the classic episode 'The Great Fusilli,'/i)).toBeInTheDocument();
  expect(screen.getByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).toBeInTheDocument();
  expect(screen.getByText(/The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil./i)).toBeInTheDocument();
  expect(screen.getByText(/Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen/i)).toBeInTheDocument();
  expect(screen.getByText(/Take part in the favor packed, adventure with Remy's Ratatouille./i)).toBeInTheDocument
  
  // Click on the accordion headers again to collapse them
  fireEvent.click(perfectSandwichAccordionHeader);
  fireEvent.click(baconPancakesAccordionHeader);
  fireEvent.click(flanAccordionHeader);
  fireEvent.click(krabbyPattyAccordionHeader);
  fireEvent.click(banagicIceCreamAccordionHeader);
  fireEvent.click(beignetsAccordionHeader);
  fireEvent.click(ratatouilleAccordionHeader);
  
  // Check if the accordion content is now hidden again
  expect(screen.queryByText(/In the whimsical world of Adventure Time/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time!/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the classic episode 'The Great Fusilli,'/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty./i)).not.toBeInTheDocument();
  expect(screen.queryByText(/The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil./i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Take part in the favor packed, adventure with Remy's Ratatouille./i)).not.toBeInTheDocument
});