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

export default RestaurantCard;
