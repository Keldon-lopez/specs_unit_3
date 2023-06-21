import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import "./HomeScreen.css";

import { ImSearch } from "react-icons/im";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState("");

  const getRecipe = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    }, []);
  };

  useEffect(() => {
    getRecipe();
  }, []);
  return (
    <div>
      <AdBanner />
      <div id="searchAndRecipeContainer">
        <div id="Search">
          <ImSearch color="orange" />
          <input type="text" placeholder="Search For A Recipe"></input>
        </div>
        <div className="recipeCardsContainer">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>

      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  );
};

export default HomeScreen;
