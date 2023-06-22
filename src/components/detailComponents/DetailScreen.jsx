import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./DetailScreen.css";

const DetailScreen = () => { 
  
  const {id} = useParams();
  const [recipe, setRecipe] =useState('');

  useEffect(() => {
    axios
        .get(`https://recipes.devmountain.com/recipes/${id}`)
        .then((res) => {
            setRecipe(res.data);
        });
}, []);
    console.log(recipe);

  return (
    <section>
      <div 
      style={{
        height: "35vh",
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white",
        fontSize: "x-large",
        padding: "20px",
      }}
    >
      <div className="recipeBanner">
        <h1>{recipe.recipe_name}</h1>
      </div>
    </div>
    </section>
  );
};

export default DetailScreen;
