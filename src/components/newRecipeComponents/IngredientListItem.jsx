import React from "react";

const IngredientListItem = (props) => {
    let {name, quantity} = props;
    return <li>
        {quantity} {name}
    </li>
}

export default IngredientListItem
