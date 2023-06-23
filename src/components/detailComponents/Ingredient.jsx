import React from "react";

const Ingredient = (props) => {
    const { quantity, ingredient} = props
    return <p>{quantity} {ingredient}</p>
}

export default Ingredient