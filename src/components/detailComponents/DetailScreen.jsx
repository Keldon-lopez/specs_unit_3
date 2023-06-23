import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailScreen.css";

import Ingredient from "./Ingredient";
import Prep from "./Prep";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
      console.log(recipe)
    });
  }, []);

  return (
    <section>
      <div
        className="recipeImage"
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
        }}
      >
        <div id="recipeBanner">
          <h1>{recipe.recipe_name}</h1>
        </div>
      </div>
      <div id="detailsContainer">
        <div id="recipeIngredientsContainer" className="detailsCard">
          <div id="quickInfo">
            <h2>Recipe</h2>
            <Prep
              prepTime={recipe.prep_time}
              cookTime={recipe.cook_time}
              serves={recipe.serves}
            />
          </div>
          <div id="Ingredients">
            <h2>Ingredients</h2>
            {recipe.ingredients &&
              recipe.ingredients.map((item, index) => {
                return (
                  <Ingredient
                    quantity={item.quantity}
                    ingredient={item.ingredient}
                  />
                );
              })}
          </div>
        </div>
        <div id="Instructions" className="detailsCard">
          <h2>Instructions</h2>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
