import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'; 

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
    <h1 className="home-title">Welcome to the Home Page!</h1>
    <p
      className="home-link"
      onClick={() => {
        navigate("/example1");
      }}
    >
      Example 1
    </p>
    <p
      className="home-link"
      onClick={() => {
        navigate("/arrayMethods");
      }}
    >
      Array Methods
    </p>
  </div>
  );
};
