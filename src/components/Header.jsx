import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
          <Link to="">
            <button className="NavButton">Home</button>
          </Link>
          <Link to="/newRecipe">
            <button className="NavButton">Add Recipe</button>
          </Link>
      </nav>
    </header>
  );
};

export default Header;
