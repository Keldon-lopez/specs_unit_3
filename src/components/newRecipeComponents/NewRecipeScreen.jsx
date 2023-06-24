import React from "react";
import "./NewRecipeScreen.css";

const NewRecipeScreen = () => {
  return (
    <section>
      <h2>Tell us about your Recipe!</h2>
      <div id="formContainer">
        <form id="addRecipeForm">
          <div className="multiInputContainer">
            <input placeholder="Name"></input>
            <input placeholder="Image URL"></input>
          </div>
          <div className="multiRadioContainer">
            <div className="radioContainer"> 
              <input name="cookTypeCook" type="radio" />
              <label htmlFor="CookTypeCook">Cook</label>
            </div>
            <div className="radioContainer">
              <input name="cookTypeBake" type="radio" />
              <label htmlFor="cookTypeBake">Bake</label>
            </div>
            <div className="radioContainer">
              <input name="cookTypeDrink" type="radio" />
              <label htmlFor="cookTypeDrink">Drink</label>
            </div>
          </div>
          <div className="multiInputContainer">
            <input placeholder="Prep Time" type="text" />
            <input placeholder="Cook Time" type="text" />
            <input placeholder="Serves" type="text" />
          </div>
          <div id="ingredientSubmitContainer">
            <div id="ingredientContainer">
              <div id="ingredientInputContainer">
                <input placeholder="Ingredient" type="text" />
                <input placeholder="Quantity" type="text" />
              </div>
              <div>some text</div>
            </div>
            <button id="addIngredientButton">Add Another</button>
          </div>
          <div id="instructionsInputContainer">
            <textarea  id="instructionsInput" placeholder="What Are the Instructions?" type="text" />
          </div>
          <button id="submitRecipeButton">Save</button>
        </form>
      </div>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
    </section>
  );
};

export default NewRecipeScreen;
