import { useState } from "react";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null || Object.keys(resInfo).length === 0) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //@type is not a valid javascript variable so you can ["@type"]
  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {" "}
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3 className="font-bold">Rating - {avgRating}</h3>
      {/* categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          category={category?.card?.card}
          key={category?.card?.card?.categoryId}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
          unsetShowIndex={() => setShowIndex(null)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
