import React, { useState } from 'react';
import { GroceryListContext } from './grocerylistcontext'; // adjust the path as needed

export const GroceryListProvider = ({ children }) => {
  const [groceryList, setGroceryList] = useState([]);

  const handleAddItem =(item) => {
    setGroceryList(prevList => [...prevList, item]);

  };

  const handleIncrease = (index) => {
    setGroceryList(prevList => {
      const newList = [...prevList];
      newList[index].quantity++;
      return newList;
    });
  };

  const handleDecrease = (index) => {
    setGroceryList(prevList => {
      const newList = [...prevList];
      if (newList[index].quantity > 1) {
        newList[index].quantity--;
      }
      return newList;
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