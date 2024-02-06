import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Recipe2 from './Recipe2';

describe('Recipe2', () => {
  test('renders the recipe title', () => {
    render(<Recipe2 />);
    const titleElement = screen.getByText("Muriel's Flan");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the recipe image', () => {
    render(<Recipe2 />);
    const imageElement = screen.getByAltText("Dish");
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the list of ingredients', () => {
    render(<Recipe2 />);
    const ingredientsText = screen.getByText('Ingredients');
    const ingredients = screen.getAllByRole('listitem');
    expect(ingredientsText).toBeInTheDocument();
    expect(ingredients).toHaveLength(ingredients.length);
  });

  test('renders the list of directions', () => {
    render(<Recipe2 />);
    const directionsText = screen.getByText('Instructions');
    const directions = screen.getAllByRole('listitem');
    expect(directionsText).toBeInTheDocument();
    expect(directions).toHaveLength(directions.length);
  });
});