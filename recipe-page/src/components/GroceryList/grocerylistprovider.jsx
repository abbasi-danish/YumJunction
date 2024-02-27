import React, { useState, useEffect } from 'react';
import { GroceryListContext } from './grocerylistcontext'; // adjust the path as needed

export const GroceryListProvider = ({ children }) => {
  const [groceryList, setGroceryList] = useState(() => {
    const localData = localStorage.getItem('groceryList');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
  }, [groceryList]);

  const handleAddItem =(item) => {
    setGroceryList(prevList => [...prevList, item]);
  };

  const handleIncrease = (index) => {
    setGroceryList(prevList => {
      return prevList.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const handleDecrease = (index) => {
    setGroceryList(prevList => {
      return prevList.map((item, i) => {
        if (i === index && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const handleRemoveItem = (index) => {
    setGroceryList(prevList => prevList.filter((item, i) => i !== index));
  };

  return (
    <GroceryListContext.Provider value={{ groceryList, handleAddItem, handleIncrease, handleDecrease, handleRemoveItem }}>
      {children}
    </GroceryListContext.Provider>
  );
};