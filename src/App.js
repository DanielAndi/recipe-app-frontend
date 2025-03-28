import React from "react";
import './App.css';
import Register from "./Register";
import Login from "./Login";
import RecipeList from "./RecipeList";

const App = () => {
  return (
    <div>
      <h1>Recipe App</h1>
      <Register />
      <Login />
      <RecipeList />
    </div>
  );
};

export default App;