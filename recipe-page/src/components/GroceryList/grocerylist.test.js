import React, { useContext } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { GroceryListProvider } from './grocerylistprovider'; // adjust the path as needed
import { GroceryListContext } from './grocerylistcontext';
// Test component that uses the GroceryListContext
const TestComponent = () => {
  const { groceryList, handleAddItem } = useContext(GroceryListContext);

  return (
    <div>
      <button onClick={() => handleAddItem({ id: '1', name: 'Test item', quantity: 1 })}>
        Add item
      </button>
      {groceryList.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

test('adds an item to the grocery list', () => {
  render(
    <GroceryListProvider>
      <TestComponent />
    </GroceryListProvider>
  );

  fireEvent.click(screen.getByText(/add item/i));
  const itemElement = screen.getByText(/test item/i);
  expect(itemElement).toBeInTheDocument();
});