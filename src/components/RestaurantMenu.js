import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();
  const { resId } = params;
  console.log("resId", resId);

  useEffect(() => {
    fecthMenu();
  }, []);

  const fecthMenu = async () => {
    const data = await fetch("https://dummyjson.com/recipes/" + resId);
    const json = await data.json();
    console.log("json", json);
    setResInfo(json);
  };

  const {
    name,
    caloriesPerServing,
    cookTimeMinutes,
    cuisine,
    ingredients,
    instructions,
    image,
  } = resInfo || {};

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <h4>{cuisine}</h4>
      <img src={image}></img>
      <p>cooking time: {cookTimeMinutes}</p>
      <p>calories Per Serving: {caloriesPerServing}</p>
      <h2>Ingredients: </h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ul>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
