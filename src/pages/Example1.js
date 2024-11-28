import React from 'react';

export const Example1 = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  
  // Using for loop
  const forLoopResults = [];
  for (let i = 0; i < fruits.length; i++) {
    forLoopResults.push(fruits[i]);
  }
  
  // Using forEach method
  const forEachResults = [];
  fruits.forEach(fruit => {
    forEachResults.push(fruit);
  });

  return (
    <div className="eg1-container">
      <h1>Example 1: Iterating Over Fruits</h1>

      <h2>Using for loop:</h2>
      <div>
        {forLoopResults.map((fruit, index) => (
          <p key={index}>{fruit}</p>
        ))}
      </div>

      <h2>Using forEach method:</h2>
      <div>
        {forEachResults.map((fruit, index) => (
          <p key={index}>{fruit}</p>
        ))}
      </div>
    </div>
  );
};
