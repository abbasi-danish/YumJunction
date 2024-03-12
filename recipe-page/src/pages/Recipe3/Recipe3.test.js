import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Recipe3 from './Recipe3';

describe('Recipe3', () => {
  test('renders the recipe title', () => {
    render(<Recipe3 />);
    const titleElement = screen.getByText("Banagic IceCream");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the recipe image', () => {
    render(<Recipe3 />);
    const imageElement = screen.getByAltText("Dish");
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the list of ingredients', () => {
    render(<Recipe3 />);
    const ingredientsText = screen.getByText('Ingredients 🍗');
    const ingredients = screen.getAllByRole('listitem');
    expect(ingredientsText).toBeInTheDocument();
    expect(ingredients).toHaveLength(ingredients.length);
  });

  test('renders the list of directions', () => {
    render(<Recipe3 />);
    const directionsText = screen.getByText('Instructions 📝');
    const directions = screen.getAllByRole('listitem');
    expect(directionsText).toBeInTheDocument();
    expect(directions).toHaveLength(directions.length);
  });
});