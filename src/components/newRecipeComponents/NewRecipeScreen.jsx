import React from "react";
import { useFormik } from "formik";
import "./NewRecipeScreen.css";

const NewRecipeScreen = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      imageUrl: "",
      cookType: "",
      prepTime: "",
      cookTime: "",
      serves: "",
      ingredients: [""],
      instructions: "",
    },
    onSubmit: values => {
      
      console.log('Form Values', values)
    }
  });
  

  return (
    <section id="newRecipeScreen">
      <h2>Tell us about your Recipe!</h2>
      <div id="formContainer">
        <form id="addRecipeForm" onSubmit={formik.handleSubmit}>
          <div className="multiInputContainer">
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <input
              name="imageUrl"
              type="text"
              placeholder="Image URL"
              onChange={formik.handleChange}
              value={formik.values.imageUrl}
            />
          </div>
          <div className="multiRadioContainer">
            <div className="radioContainer">
              <input name="cookTypeCook" type="radio" />
              <label htmlFor="CookTypeCook"> Cook</label>
            </div>
            <div className="radioContainer">
              <input name="cookTypeBake" type="radio" />
              <label htmlFor="cookTypeBake"> Bake</label>
            </div>
            <div className="radioContainer">
              <input name="cookTypeDrink" type="radio" />
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
                <input placeholder="Ingredient" type="text" />
                <input placeholder="Quantity" type="text" />
              </div>
              <div>
                <ul>
                  <li>Beans</li>
                  <li>Not Beans</li>
                  <li>Could be Beans</li>
                  <li>definitely Not Beans</li>
                  <li>Possibly Beans</li>
                  <li>Absolutely Beans</li>
                </ul>
              </div>
            </div>
            <button id="addIngredientButton">Add Another</button>
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
          <button id="submitRecipeButton" type="submit">Save</button>
        </form>
      </div>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
    </section>
  );
};

export default NewRecipeScreen;
