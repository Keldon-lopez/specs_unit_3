import React from "react";

const Prep = (props) => {
    const { prepTime, cookTime, serves} = props
    return <React.Fragment>
        <p>Prep Time: {prepTime} </p>
        <p>Cook Time: {cookTime}</p>
        <p>Serves: {serves}</p>
        </React.Fragment>
}

export default Prep