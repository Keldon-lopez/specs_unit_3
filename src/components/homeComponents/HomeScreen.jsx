import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import "./HomeScreen.css";

import { ImSearch } from "react-icons/im";

const HomeScreen = () => {
  
  const [recipes, setRecipes] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState("apple");

  const searchEnterHandler = (event) => {
    if (event.key === "Enter") {
      setSearchedRecipes(event.target.value);
      event.target.value = "";
    }
  };

  const getRecipe = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
    }, []);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = searchedRecipes.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard key={recipe.recipe_id} recipe={recipe} />;
    });

  return (
    <div>
      <AdBanner />
      <div id="searchAndRecipeContainer">
        <div id="Search">
          <ImSearch color="orange" />
          <input
            type="text"
            placeholder="Search For A Recipe"
            onKeyDown={searchEnterHandler}
          ></input>
        </div>
        <br />
        <div className="recipeCardsContainer">{recipeDisplay}</div>
      </div>
    </div>
  );
};

export default HomeScreen;
