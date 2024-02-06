import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Recipe4 from './Recipe4';

describe('Recipe4', () => {
  test('renders the recipe title', () => {
    render(<Recipe4 />);
    const titleElement = screen.getByText("Beignets");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the recipe image', () => {
    render(<Recipe4 />);
    const imageElement = screen.getByAltText("Dish");
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the list of ingredients', () => {
    render(<Recipe4 />);
    const ingredientsText = screen.getByText('Ingredients');
    const ingredients = screen.getAllByRole('listitem');
    expect(ingredientsText).toBeInTheDocument();
    expect(ingredients).toHaveLength(ingredients.length);
  });

  test('renders the list of directions', () => {
    render(<Recipe4 />);
    const directionsText = screen.getByText('Instructions');
    const directions = screen.getAllByRole('listitem');
    expect(directionsText).toBeInTheDocument();
    expect(directions).toHaveLength(directions.length);
  });
});