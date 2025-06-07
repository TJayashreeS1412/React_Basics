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
    const data = await fetch("");
    const json = data.json();
  };

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Name of the Restaurant</h1>
      <img></img>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
