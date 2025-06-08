const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    image,
    name,
    cuisine,
    tags,
    rating,
    caloriesPerServing,
    cookTimeMinutes,
  } = resData;
  console.log("RestaurantCard rendered");

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-img" src={image} alt="res-img" />
      <h3>name: {name} </h3>
      <p>cuisine: {cuisine} </p>
      <p>tags: {tags.join(", ")}</p>
      <p>rating: {rating} stars</p>
      <p>calories: {caloriesPerServing} per serving</p>
      <p>cooking time: {cookTimeMinutes} minutes</p>
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
