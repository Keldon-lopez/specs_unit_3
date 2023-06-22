import React from "react";
import "./RecipeCard.css"
import {Link} from "react-router-dom";

const RecipeCard = (props) => {
    let {recipe} = props;
    return <React.Fragment >
        <div className="recipeCardContainer">
            <img src={recipe.image_url}/>
            <p className="RecipeTitle">{recipe.recipe_name}</p>
            <br/>
            <Link to={`recipe/${recipe.recipe_id}`}>
            <button className="recipeCardButton">See More</button>
            </Link>
        </div>
    </React.Fragment>
}

export default RecipeCard
