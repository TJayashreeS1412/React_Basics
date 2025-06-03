import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    area,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  console.log("RestaurantCard rendered");

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-img" src={cloudinaryImageId} alt="res-img" />
      <h3>{name} </h3>
      <h5>{area} </h5>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
