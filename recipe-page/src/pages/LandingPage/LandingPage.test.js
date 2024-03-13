import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { getByText } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';


const accordionItems = [
  {
      headerTitle: "Adventure Time: Perfect Sandwich",
      headerBody: "In the whimsical world of Adventure Time, Jake the Dog crafts a sandwich beyond imagination in 'Time Sandwich.' With layers of savory bacon, crisp lettuce, zesty mustard, and a sprinkle of magic, each bite becomes a journey through flavor and fantasy, capturing the essence of Ooo in every delicious bite.",
      imageAlt: "adventure-time-logo",
      imageSrc: "http://localhost:3001/images/adventure-time.jpg",
      link: "/recipe1"

  }, 
  { 
      headerTitle: "Adventure Time: Bacon Pancakes",
      headerBody: "Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time! This enchanting dish combines fluffy pancakes with crispy bacon, creating a magical blend of sweet and savory flavors. Whisk together a batter of flour, sugar, and spices, then cook to golden perfection in a cast iron skillet. Top with butter and maple syrup for a truly adventurous breakfast experience that's sure to delight fans of all ages!",
      imageAlt: "adventure-time-logo",
      imageSrc: 'http://localhost:3001/images/adventure-time.jpg',
      link: "/recipe5"
  },
  {
      headerTitle: "Courage the Cowardly Dog: Muriel's Flan",
      headerBody: "In the classic episode 'The Great Fusilli,' Courage the Cowardly Dog must save Muriel from the clutches of the evil Fusilli, who plans to turn her into a flan! In this recipe, we'll be making a flan of our own, with a rich caramel sauce and a creamy custard filling.",
      imageAlt: "courage-logo", 
      imageSrc: "http://localhost:3001/images/courage-logo.png",
      link: "/recipe2"
  },



  {
      headerTitle: "Star vs. Forces of Evil: Banagic IceCream",
      headerBody: "The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil. This recipe is a delicious combination of bananas, magic, and ice cream. It's a perfect treat for a hot summer day or a magical adventure!",
      imageAlt: "starwars-logo",
      imageSrc: 'http://localhost:3001/images/ForceofEvil.jpg',
      link: "/recipe3"
  },

  {
      headerTitle: "Spongebob Squarepants: Krabby Patty",
      headerBody: "In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty. With a secret recipe known only to Mr. Krabs, the Krabby Patty is a mouthwatering blend of lettuce, cheese, tomatoes, tartar sauce, mayo, flour, tumeric, sea salt, land salt, barnacle shavings, the patty, mustard, ketchup, the secret formula, two buns, onions, and pickles. In this recipe, we'll be making our own Krabby Patty, with a few substitutions for the secret formula.",
      imageAlt: "spongebob-logo",
      imageSrc: 'http://localhost:3001/images/spongebob-logo.png',
      link: "/recipe6"
  },


  {
      headerTitle: "Princess and the Frog: Beignets",
      headerBody: "Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen",
      imageAlt: "frog-logo",
      imageSrc: 'http://localhost:3001/images/froglogo.png',
      link: '/recipe4'
  },

  {
      headerTitle: "Ratatouille: Ratatouille",
      headerBody: "Take part in the favor packed, adventure with Remy's Ratatouille. Inspired by Disney's delightful rat chef, expertly layered vegetables dancing in perfect harmony, creating a symphony of taste that will transport you back to your childhood!",
      imageAlt: "rat-logo", 
      imageSrc: 'http://localhost:3001/images/ratlogo.png',
      link: '/recipe7'
  }
];

describe('LandingPage', () => {
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify(accordionItems));
  });
  
test('renders YumJunction header', () => {
  render(
  <Router>
    <LandingPage />
  </Router> 
  
  );
  const headerElement = screen.getAllByText(/YumJunction/i);
  expect(headerElement.length).toBe(2);
});

fetchMock.mockResponse(JSON.stringify(accordionItems));

test('accordion expands and collapses when clicked', async () => {
  render(
  <Router>
    <LandingPage />
  </Router>
  
  );
  
  // Tests a few accordion header elements
  const flanAccordionHeader = await screen.findByText(/Courage the Cowardly Dog: Muriel's Flan/i);
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