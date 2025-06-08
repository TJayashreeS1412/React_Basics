import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality, cuisines, avgRating, sla } =
    resData?.info;
  console.log("RestaurantCard rendered");

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3>name: {name} </h3>
      <p>cuisine: {locality} </p>
      <p>tags: {cuisines.join(", ")}</p>
      <p>rating: {avgRating} stars</p>
      <p>delivery time: {sla.deliveryTime} minutes</p>
    </div>
  );
};

//Higher order component
// input - RestaurantCard => RestaurantCardEasy

export const withEasyLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-950 text-white m-2 px-2 rounded-lg">
          Easy
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
