import React from "react";
import "./RecipeCard.css"

const RecipeCard = (props) => {
    return <React.Fragment>
        <div className="recipeCardContainer">
            <img src="https://www.allrecipes.com/thmb/xHBuon0awT1mhSciCN_r_qe1KQQ=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/20144-banana-banana-bread-mfs-60-bddcb8e0caac452386de52f6fecf33db.jpg"/>
            <p className="RecipeTitle">Banana Bread</p>
            <br/>
            <button className="recipeCardButton">See More</button>
        </div>
    </React.Fragment>
}

export default RecipeCard
