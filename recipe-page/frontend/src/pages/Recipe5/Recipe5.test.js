import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Recipe5 from './Recipe5';

describe('Recipe5', () => {
  test('renders the recipe title', () => {
    render(<Recipe5 />);
    const titleElement = screen.getByText("Bacon Pancakes");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the recipe image', () => {
    render(<Recipe5 />);
    const imageElement = screen.getByAltText("Dish");
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the list of ingredients', () => {
    render(<Recipe5 />);
    const ingredientsText = screen.getByText('Ingredients 🍗');
    const ingredients = screen.getAllByRole('listitem');
    expect(ingredientsText).toBeInTheDocument();
    expect(ingredients).toHaveLength(ingredients.length);
  });

  test('renders the list of directions', () => {
    render(<Recipe5 />);
    const directionsText = screen.getByText('Instructions 📝');
    const directions = screen.getAllByRole('listitem');
    expect(directionsText).toBeInTheDocument();
    expect(directions).toHaveLength(directions.length);
  });
});