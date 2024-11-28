import React, { useState } from "react";

export const ArrayMethods = () => {
  const [numbers] = useState([12, 5, 8, 130, 44, 67, 89, 23, 9, 3, 55, 11]);

  // 1. Double the numbers using map()
  const doubledNumbers = numbers.map((num) => num * 2);

  // 2. Filter out even numbers using filter()
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);

  // 3. Find the first number greater than 50 using find()
  const firstGreaterThan50 = numbers.find((num) => num > 50);

  // 4. Sum all the numbers using reduce()
  const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);

  // 5. Check if all numbers are greater than 10 using every()
  const allGreaterThan10 = numbers.every((num) => num > 10);

  // 6. Check if at least one number is even using some()
  const hasEvenNumber = numbers.some((num) => num % 2 === 0);

  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  const sortedNumbers = [...numbers].sort((a, b) => a - b); // To avoid mutating the original array
  const containsOdd = numbers.some((num) => num % 2 !== 0);
  const flatArray = [
    [1, 2],
    [3, 4],
    [5, 6],
  ].flat();
  return (
    <div className="array-methods-container">
      <h1>Array Methods Example</h1>

      <h2>Original Numbers : </h2>
      <p>
        {`numbers : `}
        {numbers.join(", ")}
      </p>

      <div className="array-methods-overall-box">
        <div className="array-methods-box">
          <h2>1. Double the numbers (map) : </h2>
          <h3>Question : {`numbers.map((num) => num * 2)  ? `}</h3>
          <h3>Ans :</h3>
          <p> {doubledNumbers.join(", ")}</p>
        </div>

        <div className="array-methods-box">
          <h2>2. Filter out even & odd numbers (filter) : </h2>
          <h3>
            Filter Odd numbers : {`numbers.filter((num) => num % 2 !== 0)  ? `}
          </h3>
          <h3>Ans :</h3>
          <p> {oddNumbers.join(", ")}</p>
          <h3>
            Filter even numbers : {`numbers.filter((num) => num % 2 === 0)  ? `}
          </h3>
          <h3>Ans :</h3>
          <p> {evenNumbers.join(", ")}</p>
        </div>

        <div className="array-methods-box">
          <h2>3. Find the first number greater than 50 (find) : </h2>
          <h3>Question : {`numbers.find((num) => num > 50)  ? `}</h3>
          <h3>Ans :</h3>
          <p>
            {" "}
            {firstGreaterThan50 !== undefined
              ? firstGreaterThan50
              : "No number found"}
          </p>
        </div>

        <div className="array-methods-box">
          <h2>4. Sum all the numbers (reduce) : </h2>
          <h3>Question : {`numbers.reduce((acc, num) => acc + num, 0)  ? `}</h3>
          <h3>Ans :</h3>
          <p> {sumOfNumbers}</p>
        </div>

        <div className="array-methods-box">
          <h2>5. Check if all numbers are greater than 10 (every) : </h2>
          <h3>Question : {`numbers.every((num) => num > 10)  ? `}</h3>
          <h3>Ans :</h3>
          <p>
            {" "}
            {allGreaterThan10
              ? "Yes, all numbers are greater than 10"
              : "No, not all numbers are greater than 10"}
          </p>
        </div>

        <div className="array-methods-box">
          <h2>6. Check if at least one number is even (some) : </h2>
          <h3>Question : {`numbers.some((num) => num % 2 === 0)  ? `}</h3>
          <h3>Ans :</h3>
          <p>
            {" "}
            {hasEvenNumber
              ? "Yes, there is at least one even number"
              : "No, there are no even numbers"}
          </p>
        </div>

        <div className="array-methods-box">
          <h2>7. Sorted Numbers (sort) : </h2>
          <h3>Question : {`[...numbers].sort((a, b) => a - b)  ? `}</h3>
          <h3>Ans :</h3>
          <p> {sortedNumbers.join(", ")}</p>
        </div>

        <div className="array-methods-box">
          <h2>8. Contains odd numbers (some) : </h2>
          <h3>Question : {`numbers.some((num) => num % 2 !== 0)  ? `}</h3>
          <h3>Ans :</h3>
          <p> {containsOdd ? "Yes" : "No"}</p>
        </div>

        <div className="array-methods-box">
          <h2>9. Flattened Array (flat) : </h2>
          <h3>
            Question :{" "}
            {` [
   [1, 2],
   [3, 4],
   [5, 6],
 ].flat(); ? `}
          </h3>
          <h3>Ans :</h3>
          <p>{flatArray.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};
