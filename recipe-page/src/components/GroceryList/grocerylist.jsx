import React from 'react';

const GroceryList = ({ groceryList, handleRemoveItem, handleIncrease, handleDecrease }) => {
    return (
      <ul>
        {groceryList.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => handleIncrease(index)}>+</button>
            <button onClick={() => handleDecrease(index)}>-</button>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };

export default GroceryList;