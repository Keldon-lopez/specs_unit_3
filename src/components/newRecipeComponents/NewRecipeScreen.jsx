import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./NewRecipeScreen.css";
import IngredientListItem from "./IngredientListItem.jsx";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const formik = useFormik({
    initialValues: {
      recipeName: "",
      imageURL: "",
      type: "",
      prepTime: "",
      cookTime: "",
      serves: "",
      ingredients: ingredients,
      instructions: "",
    },
    onSubmit: (values) => {
      values.ingredients = ingredients;
      axios.post(`https://recipes.devmountain.com/recipes`, values);
      console.log("Form Values", values);
    },
  });

  const addIngredientHandler = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const ingredientsList = ingredients.map((ingredient, index) => {
    return (
      <IngredientListItem
        key={index}
        name={ingredient.name}
        quantity={ingredient.quantity}
      />
    );
  });

  return (
    <section id="newRecipeScreen">
      <h2>Tell us about your Recipe!</h2>
      <div id="formContainer">
        <form id="addRecipeForm" onSubmit={formik.handleSubmit}>
          <div className="multiInputContainer">
            <input
              name="recipeName"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.recipeName}
            />
            <input
              name="imageURL"
              type="text"
              placeholder="Image URL"
              onChange={formik.handleChange}
              value={formik.values.imageURL}
            />
          </div>
          <div className="multiRadioContainer">
            <div className="radioContainer">
              <input
                name="type"
                type="radio"
                value="Cook"
                onChange={formik.handleChange}
              />
              <label htmlFor="CookTypeCook"> Cook</label>
            </div>
            <div className="radioContainer">
              <input
                name="type"
                type="radio"
                value="Bake"
                onChange={formik.handleChange}
              />
              <label htmlFor="cookTypeBake"> Bake</label>
            </div>
            <div className="radioContainer">
              <input
                name="type"
                type="radio"
                value="Drink"
                onChange={formik.handleChange}
              />
              <label htmlFor="cookTypeDrink"> Drink</label>
            </div>
          </div>
          <div className="multiInputContainer">
            <input
              name="prepTime"
              className="timeAndServings"
              placeholder="Prep Time"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.prepTime}
            />
            <input
              name="cookTime"
              className="timeAndServings"
              placeholder="Cook Time"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cookTime}
            />
            <input
              name="serves"
              className="timeAndServings"
              placeholder="Serves"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.serves}
            />
          </div>
          <div id="ingredientSubmitContainer">
            <div id="ingredientContainer">
              <div id="ingredientInputContainer">
                <input
                  name="Ingredient"
                  placeholder="Ingredient"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  name="Quantity"
                  placeholder="Quantity"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div>
                <ul>{ingredientsList}</ul>
              </div>
            </div>
            <button
              id="addIngredientButton"
              type="button"
              onClick={addIngredientHandler}
            >
              Add Another
            </button>
          </div>
          <div id="instructionsInputContainer">
            <textarea
              name="instructions"
              id="instructionsInput"
              placeholder="What Are the Instructions?"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.instructions}
            />
          </div>
          <button id="submitRecipeButton" type="submit">
            Save
          </button>
        </form>
      </div>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
    </section>
  );
};

export default NewRecipeScreen;
