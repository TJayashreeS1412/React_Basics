import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality, cuisines, avgRating, sla } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-2 p-2 w-56 bg-emerald-50 hover:bg-emerald-500 hover:scale-105 duration-300 rounded-lg">
      <img
        className="w-56 h-56 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="font-bold mt-4">{name} </h3>
      <p className=" text-sm mb-4">{locality} </p>
      <p className="break-all text-sm py-1">{cuisines.join(", ")}</p>
      <p className="text-sm py-1">
        {avgRating}⭐️ ({sla.deliveryTime} minutes )
      </p>
      <p className="text-sm py-1">User: {loggedInUser}</p>
    </div>
  );
};

//Higher order component
// input - RestaurantCard => RestaurantCardEasy

export const withEasyLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-950 text-white m-2 mt-4 px-2 rounded-lg">
          Vegeterian
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
